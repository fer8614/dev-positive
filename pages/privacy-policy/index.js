import React from "react";

import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our site."
    },
    {
      title: "2. Information We Collect",
      content: "We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.\n\n• Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site."
    },
    {
      title: "3. Use of Your Information",
      content: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:\n\n• Create and manage your account.\n• Email you regarding your account or order.\n• Fulfill and send orders, and send related information.\n• Generate a personal profile about you.\n• Increase the efficiency and operation of the site.\n• Monitor and analyze usage and trends to improve your experience with the site."
    },
    {
      title: "4. Disclosure of Your Information",
      content: "We may share information we have collected about you in certain situations:\n\n• By Law or to Protect Rights: If we believe the release of information about you is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, and safety.\n\n• Third-Party Service Providers: We may share your information with parties who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance."
    },
    {
      title: "5. Security of Your Information",
      content: "We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
    },
    {
      title: "6. Contact Us",
      content: "If you have questions or comments about this Privacy Policy, please contact us at:\n\nEmail: support@devpositive.work\nAddress: [Your Address]\nPhone: [Your Phone Number]"
    }
  ];

  return (
    <div className="w-full">
      <SEOHead 
        title="Privacy Policy - Yesid F Cepeda"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
      />
      
      <PageShell title="Privacy Policy" description="Last updated: January 2026">
        <div className="site-prose space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="site-surface p-6 sm:p-8">
              <h2 className="mb-4">{section.title}</h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </PageShell>
    </div>
  );
};

export default PrivacyPolicy;
