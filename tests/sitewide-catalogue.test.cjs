const { test } = require('node:test');
const assert = require('node:assert/strict');

const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';

async function page(path) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /class="site-page"/);
  assert.match(html, /<h1 id="page-heading"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  return html;
}

test('work shell, catalogue, filters and project destinations', async () => {
  const html = await page('/work');
  for (const label of ['All Projects', 'Full Stack', 'AI Projects', 'Frontend', 'Backend']) assert.ok(html.includes(label), label);
  assert.ok(html.replace(/<!--.*?-->/g, '').includes('Showing 13 of 13 projects'));
  const projects = [
    ['ClipFactory', 'https://clipfactory.win/', '/clipfactory.png'],
    ['LinkHub', 'https://linkhubf.netlify.app/', '/linkHub.png'],
    ['TaskFlow', 'https://task-f-low-front-end.vercel.app/auth/login/', '/taskflow.png'],
    ['Product Manager', 'https://frontend-product-manager-react-node-express-ts.vercel.app/', '/product-manager.png'],
    ['Drink Recipes Finder', 'https://effervescent-maamoul-b50b9d.netlify.app/', '/coktail.png'],
    ['Crypto Currency', 'https://comfy-banoffee-2a9372.netlify.app/', '/cryptoCurrency.png'],
    ['Weather Finder', 'https://chimerical-youtiao-bd2ad2.netlify.app/', '/weatherFinder.png'],
    ['Node NOC APP', 'https://github.com/fer8614/Node-NOC/', '/node-noc-app.png'],
    ['REST API Project', 'https://github.com/fer8614/Node-TypeScript-Express-Rest/', '/rest-project-2.png'],
    ['Expense Planner', 'https://delightful-fox-97e7e1.netlify.app/', '/expense-planner.png'],
    ['Patient Follow Up', 'https://super-tanuki-7e93aa.netlify.app/', '/Patient-follow-up.png'],
    ['Calorie Tracker', 'https://jolly-faloodeh-5b1f8a.netlify.app/', '/calorie-tracker.png'],
    ['Tip Calculator', 'https://deft-scone-4f45f6.netlify.app/', '/tip-calculator.png'],
  ];
  for (const project of projects) for (const value of project) assert.ok(html.includes(value), value);
  assert.ok(html.includes('https://github.com/fer8614'));
  assert.match(html, /aria-pressed="true"/);
});

test('services shell retains five services, metrics and slider pagination', async () => {
  const html = await page('/services');
  for (const value of ['Branding', 'Design', 'Development', 'Copywriting', 'SEO', '50+', '5+', '24/7', '100%', 'swiper-pagination']) assert.ok(html.includes(value), value);
});

test('testimonials shell retains three placeholders and slider controls', async () => {
  const html = await page('/testimonials');
  for (const value of ['Anne Smith', 'Jane Doe', 'Jhon Doe', '/t-avt-1.png', '/t-avt-2.png', '/t-avt-3.png', 'swiper-button-next', 'swiper-button-prev', 'swiper-pagination']) assert.ok(html.includes(value), value);
});
