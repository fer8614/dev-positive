const assert = require("node:assert/strict");
const { test } = require("node:test");
const baseURL = process.env.PORTFOLIO_URL || "http://localhost:3000";
const routes = ["/", "/about", "/work", "/contact", "/services", "/testimonials", "/privacy-policy", "/terms-of-service", "/data-deletion"];
const cache = new Map();
async function page(path) {
  if (!cache.has(path)) cache.set(path, fetch(new URL(path, baseURL), { signal: AbortSignal.timeout(20000) }).then(async response => {
    assert.equal(response.status, 200, `${path} must remain available`);
    return response.text();
  }));
  return cache.get(path);
}

test("all UI routes use the shared site identity rather than the old illustrated background", async () => {
  for (const route of routes) {
    const html = await page(route);
    assert.ok(/class="[^"]*\bsite-root\b/.test(html), `${route}: shared site root`);
    assert.ok(!html.includes('src="/top-left-img.png"'), `${route}: no old decorative background`);
  }
});

test("the redesigned footer is shared, readable in the initial HTML and links to contact", async () => {
  for (const route of routes) {
    const footer = (await page(route)).match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || "";
    assert.ok(footer.includes('aria-label="Site footer"'), `${route}: named site footer`);
    assert.ok(/class="[^"]*\bsite-footer\b/.test(footer), `${route}: unified footer surface`);
    assert.ok(!footer.includes('opacity:0'), `${route}: footer must not depend on an entrance animation`);
    assert.ok(footer.includes('href="/contact"'), `${route}: contact action`);
    assert.ok(footer.includes('href="mailto:support@devpositive.work"'), `${route}: existing email preserved`);
  }
});

test("the footer keeps every legal destination and the homepage keeps the published Meta token", async () => {
  for (const route of routes) {
    const footer = (await page(route)).match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || "";
    for (const legal of ["/privacy-policy", "/terms-of-service", "/data-deletion"]) {
      assert.ok(footer.includes(`href="${legal}"`), `${route}: preserve ${legal}`);
    }
  }
  const head = (await page("/")).match(/<head\b[\s\S]*?<\/head>/)?.[0] || "";
  const tags = head.match(/<meta\b[^>]*name="facebook-domain-verification"[^>]*>/g) || [];
  assert.equal(tags.length, 1);
  assert.ok(tags[0].includes('content="umtnm0vg1u2gxi3qldj2hgkuhf3m7h"'));
});
