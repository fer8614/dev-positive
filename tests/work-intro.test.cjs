const assert = require('node:assert/strict');
const { test } = require('node:test');
const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';
const cache = new Map();
const text = html => html.replace(/<!--.*?-->/g, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
async function page(path) {
  if (!cache.has(path)) cache.set(path,fetch(new URL(path,base),{signal:AbortSignal.timeout(20000)}).then(async response=>{
    assert.equal(response.status,200,path);
    return response.text();
  }));
  return cache.get(path);
}

test('the Projects introduction gives recruiters and clients clear, separate next steps', async () => {
  const html = await page('/work');
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || '';
  assert.equal(text(heading),'Real projects. Practical solutions.');
  const aside = html.match(/<aside\b[^>]*aria-label="Explore opportunities"[\s\S]*?<\/aside>/)?.[0] || '';
  assert.ok(aside,'a dedicated audience panel must be present');
  for (const [label,path] of [['For recruiters: explore my experience','/about'],['For clients: discuss a project','/contact']]) {
    const anchor = [...aside.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)].map(match=>match[0]).find(link=>link.includes(`aria-label="${label}"`));
    assert.ok(anchor,label);
    assert.ok(anchor.includes(`href="${path}"`),path);
  }
});

test('the overview shows actual catalogue totals rather than invented business metrics', async () => {
  const html = await page('/work');
  const overview = html.match(/<dl\b[^>]*aria-label="Project overview"[\s\S]*?<\/dl>/)?.[0] || '';
  assert.ok(overview,'project overview must be visible');
  const metrics = Object.fromEntries([...overview.matchAll(/<dt\b[^>]*>([\s\S]*?)<\/dt>[\s\S]*?<dd\b[^>]*>([\s\S]*?)<\/dd>/g)].map(match=>[text(match[1]),text(match[2])]));
  const buttons = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g)].map(match=>text(match[1]));
  for (const [name,filter] of [['Projects','All Projects'],['Full Stack','Full Stack'],['With AI','AI Projects']]) {
    const rendered = buttons.find(label=>label.startsWith(filter));
    const count = rendered?.match(/\(\s*(\d+)\s*\)/)?.[1];
    assert.ok(count,filter);
    assert.equal(metrics[name],count,name+' must match the public filter count');
  }
});

test('pages without an audience panel retain the standard shared header', async () => {
  const routes = ['/about','/contact','/services','/testimonials','/privacy-policy','/terms-of-service','/data-deletion'];
  for (const route of routes) {
    const html = await page(route);
    assert.ok(html.includes('<header class="mb-10 max-w-3xl sm:mb-12">'),route+': unchanged default header');
    assert.equal((html.match(/<h1\b/g)||[]).length,1,route+': single heading');
    assert.ok(!html.includes('aria-label="Explore opportunities"'),route+': no portfolio-only panel');
  }
});
