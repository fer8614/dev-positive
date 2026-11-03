const test = require('node:test');
const assert = require('node:assert/strict');

const base = process.env.PORTFOLIO_URL || 'http://localhost:3000';
const policies = [
  {
    path: '/privacy-policy', title: 'Privacy Policy', count: 6,
    headings: ['1. Introduction', '6. Contact Us'],
    text: ['• Personal Data: Personally identifiable information', 'Email: support@devpositive.work', 'Address: [Your Address]', 'Phone: [Your Phone Number]'],
  },
  {
    path: '/terms-of-service', title: 'Terms of Service', count: 9,
    headings: ['1. Agreement to Terms', '9. Governing Law'],
    text: ['• Modify or copy the materials.', 'Email: support@devpositive.work', 'laws of [Your Country/State]'],
  },
  {
    path: '/data-deletion', title: 'Data Deletion Policy', count: 9,
    headings: ['1. Your Right to Data Deletion', '9. Contact Information'],
    text: ['1. Send a written request to our Data Protection Officer at: support@devpositive.work', '• Backup copies may take up to 90 days to be fully removed', 'Data Protection Officer: [Name]'],
  },
];

for (const policy of policies) {
  test(`${policy.path} preserves policy content and shared presentation`, async () => {
    const response = await fetch(new URL(policy.path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /class="site-page"/);
    assert.match(html, /class="[^"]*site-prose/);
    assert.equal((html.match(/class="[^"]*site-surface/g) || []).length, policy.count);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes(`>${policy.title}</h1>`));
    assert.equal((html.match(/<h2 class="mb-4">/g) || []).length, policy.count);
    assert.ok(html.includes('Last updated: January 2026'));
    for (const item of [...policy.headings, ...policy.text]) assert.ok(html.includes(item), item);
    assert.match(html, /whitespace-pre-line/);
    assert.doesNotMatch(html, /bg-hero-gradient|bg-gradient-to-br/);
    for (const route of ['/privacy-policy', '/terms-of-service', '/data-deletion']) {
      assert.ok(html.includes(`href="${route}"`), `missing link to ${route}`);
    }
  });
}
