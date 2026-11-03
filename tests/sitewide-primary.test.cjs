const test = require('node:test');
const assert = require('node:assert/strict');

const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';

async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200);
  return response.text();
}

function checkShell(html, title) {
  assert.match(html, /<section class="site-page" aria-labelledby="page-heading">/);
  assert.match(html, new RegExp(`<h1 id="page-heading" class="site-title">${title}</h1>`));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(html, /bg-hero-gradient|bg-gradient-to-br/);
  assert.match(html, /href="\/"/);
}

test('About uses the shared shell and retains its default skills, choices and stats', async () => {
  const html = await page('/about');
  checkShell(html, 'About Me');
  for (const text of ['Web Development', 'UI/UX Design', 'skills', 'experience', 'credentials', 'Years Experience', 'Projects Completed', 'Technologies']) {
    assert.ok(html.includes(text), `missing ${text}`);
  }
  for (const value of ['2+', '15+', '8+']) assert.ok(html.includes(value), `missing ${value}`);
  for (const choice of ['skills', 'experience', 'credentials']) {
    assert.match(html, new RegExp(`<button[^>]*>${choice}</button>`));
  }
});

test('Contact uses the shared shell and retains location and native required form controls', async () => {
  const html = await page('/contact');
  checkShell(html, 'Let’s Connect');
  assert.ok(html.includes('Keizer, Oregon'));
  assert.match(html, /<form(?:\s|>)/);
  assert.match(html, /Send Message/);
  for (const [id, label, type] of [['name', 'Your Name', 'text'], ['email', 'Your Email', 'email'], ['subject', 'Subject', 'text'], ['message', 'Your Message', null]]) {
    assert.match(html, new RegExp(`<label[^>]*for="${id}"[^>]*>${label}</label>`));
    const control = html.match(new RegExp(`<${type ? 'input' : 'textarea'}[^>]*id="${id}"[^>]*>`));
    assert.ok(control, `missing ${id} control`);
    assert.match(control[0], /required=""/);
    if (type) assert.match(control[0], new RegExp(`type="${type}"`));
  }
});
