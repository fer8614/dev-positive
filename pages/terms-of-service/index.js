import React from "react";

import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials.\n• Use the materials for any commercial purpose or for any public display.\n• Attempt to decompile or reverse engineer any software contained on the website.\n• Remove any copyright or other proprietary notations from the materials.\n• Transfer the materials to another person or \"mirror\" the materials on any other server."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice."
    },
    {
      title: "6. Links",
      content: "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Modifications",
      content: "We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "8. Contact Us",
      content: "For questions about these Terms of Service, please contact us at:\n\nEmail: support@devpositive.work\nAddress: [Your Address]\nPhone: [Your Phone Number]"
    },
    {
      title: "9. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts located in that location."
    }
  ];

  return (
    <div className="w-full">
      <SEOHead 
        title="Terms of Service - Yesi Cepeda Benitez"
        description="Read our terms of service to understand the rules and conditions for using our website."
      />
      
      <PageShell title="Terms of Service" description="Last updated: January 2026">
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

export default TermsOfService;
