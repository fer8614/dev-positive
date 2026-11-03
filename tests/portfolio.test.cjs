const assert = require("node:assert/strict");
const { test } = require("node:test");

const baseURL = process.env.PORTFOLIO_URL || "http://localhost:3000";
const pages = new Map();
const text = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");

async function page(path) {
  if (!pages.has(path)) {
    pages.set(path, fetch(new URL(path, baseURL), { signal: AbortSignal.timeout(20000) })
      .then(async (response) => {
        assert.equal(response.status, 200, `${path} must remain available`);
        return response.text();
      }));
  }
  return pages.get(path);
}

test("the homepage introduces the developer and offers clear project and contact actions", async () => {
  const html = await page("/");
  assert.match(text(html), /Good ideas deserve great software\./);
  assert.match(text(html), /Yesid F Cepeda/);
  assert.ok(/href="\/?#selected-work"[^>]*>[\s\S]*?View projects/.test(html), "View projects must link to the featured-work section");
  assert.match(html, /href="\/contact"[^>]*>[\s\S]*?Let[\s\S]*?talk/);
});

test("navigation has visible labels and retains all four routes", async () => {
  const html = await page("/");
  const nav = html.match(/<nav\b[^>]*aria-label="Main navigation"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav, "a named main navigation must be present");
  for (const [path, label] of [["/", "Home"], ["/about", "About"], ["/work", "Projects"], ["/contact", "Contact"]]) {
    const link = nav.match(new RegExp(`<a\\b[^>]*href="${path}"[^>]*>[\\s\\S]*?<\\/a>`))?.[0];
    assert.ok(link, `${label} must retain its route`);
    assert.match(text(link), new RegExp(label));
    if (path === "/") assert.match(link, /aria-current="page"/);
  }
});

test("four featured projects show their existing live destinations", async () => {
  const html = await page("/");
  const section = html.split('id="selected-work"')[1]?.split("</section>")[0];
  assert.ok(section, "featured work must be available on the homepage");
  assert.equal((section.match(/<article\b/g) || []).length, 4);
  for (const [name, url] of [
    ["ClipFactory", "https://clipfactory.win/"],
    ["TaskFlow", "https://task-f-low-front-end.vercel.app/auth/login/"],
    ["Product Manager", "https://frontend-product-manager-react-node-express-ts.vercel.app/"],
    ["LinkHub", "https://linkhubf.netlify.app/"],
  ]) {
    assert.ok(text(section).includes(name), `${name} must be featured`);
    assert.ok(section.includes(`href="${url}"`), `${name} must retain its live destination`);
  }
});

test("recruiters and clients each have an explicit next step", async () => {
  const html = await page("/");
  assert.match(text(html), /For recruiters/);
  assert.match(text(html), /For clients/);
  assert.match(html, /href="\/about"[^>]*>[\s\S]*?Explore my experience/);
  assert.match(html, /href="\/contact"[^>]*>[\s\S]*?Discuss a project/);
});

test("existing about, work and contact pages stay available and preserve the project catalogue", async () => {
  const [, work] = await Promise.all([page("/about"), page("/work"), page("/contact")]);
  assert.match(text(work), /Showing 13 of 13 projects/);
  for (const category of ["All Projects", "Full Stack", "Frontend", "Backend"]) {
    assert.ok(text(work).includes(category), `${category} filter must remain available`);
  }
});
