const assert = require('node:assert/strict');
const { test } = require('node:test');
const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';
const cache = new Map();
const text = html => html.replace(/<!--.*?-->/g, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
async function page(path) {
  if (!cache.has(path)) cache.set(path, fetch(new URL(path, base), {signal:AbortSignal.timeout(20000)}).then(async response => {
    assert.equal(response.status, 200, `${path}: public page remains available`);
    return response.text();
  }));
  return cache.get(path);
}

test('ClipFactory is first in both the homepage showcase and selected projects without removing earlier highlights', async () => {
  const html = await page('/');
  const showcase = [...html.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)].map(match => match[0]).find(anchor => anchor.includes('aria-label="Explore ClipFactory live demo"'));
  assert.ok(showcase, 'ClipFactory must be the hero showcase');
  assert.ok(showcase.includes('href="https://clipfactory.win/"'), 'showcase uses the supplied live URL');
  assert.ok(showcase.includes('src="/clipfactory.png"'), 'showcase uses the supplied screenshot');
  const selected = html.split('id="selected-work"')[1]?.split('</section>')[0] || '';
  const titles = [...selected.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].map(match => text(match[1]));
  assert.deepEqual(titles, ['ClipFactory', 'LinkHub', 'TaskFlow', 'Product Manager']);
  assert.ok(selected.includes('aria-label="AI-enabled project"'), 'AI capability is visible on the featured project');
});

test('the catalogue adds ClipFactory and an overlapping AI category while retaining the existing categories', async () => {
  const html = await page('/work');
  const firstTitle = html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)?.[1];
  assert.equal(text(firstTitle || ''), 'ClipFactory');
  const labels = [...html.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/g)].map(match => text(match[1]));
  for (const [label, count] of [['All Projects',13],['Full Stack',4],['AI Projects',1],['Frontend',7],['Backend',2]]) {
    assert.ok(labels.some(value => new RegExp(`^${label}\\s*\\(\\s*${count}\\s*\\)$`).test(value)), `${label}: count ${count}`);
  }
  assert.ok(text(html).includes('Showing 13 of 13 projects'));
  assert.ok(html.includes('href="https://clipfactory.win/"'));
  assert.ok(html.includes('src="/clipfactory.png"'));
  assert.ok(html.includes('aria-label="AI-enabled project"'));
  for (const technology of ['NestJS','PostgreSQL','n8n']) assert.ok(html.includes(technology), technology);
});

test('AWS is visible in ClipFactory technologies on both the homepage and catalogue', async () => {
  const home = await page('/');
  const selected = home.split('id="selected-work"')[1]?.split('</section>')[0] || '';
  const clipCard = selected.match(/<article\b[\s\S]*?<\/article>/)?.[0] || '';
  assert.ok(/<li\b[^>]*>AWS<\/li>/.test(clipCard), 'AWS must be visible among ClipFactory homepage technologies');
  const work = await page('/work');
  const firstCard = work.split(/<h3\b/)[1]?.split(/<h3\b/)[0] || '';
  assert.ok(/>AWS<\/span>/.test(firstCard), 'AWS must be visible in the ClipFactory catalogue card');
});

test('the ClipFactory preview is served as a real public PNG asset', async () => {
  const response = await fetch(new URL('/clipfactory.png', base), {signal:AbortSignal.timeout(20000)});
  assert.equal(response.status, 200);
  assert.ok(response.headers.get('content-type')?.includes('image/png'));
  const bytes = new Uint8Array(await response.arrayBuffer());
  assert.deepEqual(Array.from(bytes.slice(0,8)), [137,80,78,71,13,10,26,10]);
  assert.ok(bytes.length > 1024);
});
