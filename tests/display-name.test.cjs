const assert = require('node:assert/strict');
const { test } = require('node:test');
const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';
const name = 'Yesid F Cepeda';
const routes = ['/', '/about', '/work', '/contact', '/services', '/testimonials', '/privacy-policy', '/terms-of-service', '/data-deletion'];
const cache = new Map();
const text = html => html.replace(/<!--.*?-->/g, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const ownerNames = html => [...text(html).matchAll(/\bYesid\b.*?\bCepeda(?:\s+B\.)?/g)].map(match=>match[0]);
async function page(path) {
  if (!cache.has(path)) cache.set(path, fetch(new URL(path,base),{signal:AbortSignal.timeout(20000)}).then(async response=>{
    assert.equal(response.status,200,path);
    return response.text();
  }));
  return cache.get(path);
}

test('every page shows the exact requested owner name in its header and footer', async () => {
  for (const route of routes) {
    const html = await page(route);
    const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0] || '';
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || '';
    assert.deepEqual(ownerNames(header),[name],route+': header name');
    assert.deepEqual(ownerNames(footer),[name],route+': copyright name');
  }
});

test('the homepage introduction and all existing owner metadata use the same short name', async () => {
  const home = await page('/');
  const main = home.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  assert.deepEqual(ownerNames(main),[name],'homepage introduction');
  for (const route of routes) {
    const html = await page(route);
    assert.doesNotMatch(html,/Yesid Fernando Cepeda(?: B\.)?/);
    const head = html.match(/<head\b[\s\S]*?<\/head>/)?.[0] || '';
    const author = head.match(/<meta\b[^>]*name="author"[^>]*content="([^"]*)"/);
    if (author) assert.equal(author[1],name,route+': author');
    const title = head.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '';
    if (route !== '/testimonials') assert.ok(title.includes(name),route+': title');
    if (route === '/') assert.ok(head.includes("Explore Yesid F Cepeda"),'homepage description');
  }
});

test('renaming display text does not change contact, social links or Meta verification', async () => {
  for (const route of routes) {
    const html = await page(route);
    for (const href of ['mailto:support@devpositive.work','https://github.com/fer8614','https://www.linkedin.com/in/y-fernando-cepeda-b-/']) {
      assert.ok(html.includes(`href="${href}"`),route+': preserve '+href);
    }
  }
  const head = (await page('/')).match(/<head\b[\s\S]*?<\/head>/)?.[0] || '';
  const tags = head.match(/<meta\b[^>]*name="facebook-domain-verification"[^>]*>/g) || [];
  assert.equal(tags.length,1);
  assert.ok(tags[0].includes('content="umtnm0vg1u2gxi3qldj2hgkuhf3m7h"'));
});
