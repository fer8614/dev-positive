import React from "react";

import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const DataDeletion = () => {
  const sections = [
    {
      title: "1. Your Right to Data Deletion",
      content: "We respect your privacy and your right to control your personal data. Under applicable data protection laws, including GDPR and CCPA, you have the right to request the deletion of your personal data that we have collected from you."
    },
    {
      title: "2. What Data Can Be Deleted",
      content: "You can request deletion of the following personal data:\n\n• Your name and contact information\n• Your email address\n• Your account information and profile data\n• Your communication history with us\n• Any files or documents you have uploaded\n• Your browsing history on our website\n• Any other personal information associated with your account\n\nPlease note that some data may be retained for legal, tax, or accounting purposes as required by law."
    },
    {
      title: "3. Data We Cannot Delete",
      content: "Certain data cannot be deleted due to legal or operational requirements:\n\n• Transaction records required for financial or tax purposes\n• Data needed to comply with legal obligations\n• Data necessary to resolve disputes or enforce agreements\n• Anonymized or aggregated data that cannot identify you\n• Data you have requested we retain"
    },
    {
      title: "4. How to Request Data Deletion",
      content: "To request deletion of your personal data, please:\n\n1. Send a written request to our Data Protection Officer at: support@devpositive.work\n2. Include your full name, email address, and account details\n3. Clearly state that you are requesting deletion of your personal data\n4. Provide any additional information that helps us identify your data\n\nWe will respond to your request within 30 days of receipt."
    },
    {
      title: "5. Verification Process",
      content: "To protect your privacy and security, we may need to verify your identity before processing your deletion request. We may ask you to:\n\n• Provide proof of identity\n• Answer security questions\n• Verify your email address\n• Confirm your account information\n\nThis verification process ensures that only authorized individuals can request deletion of personal data."
    },
    {
      title: "6. Deletion Timeline",
      content: "Once your deletion request is verified and approved:\n\n• We will delete your personal data within 30 days\n• Backup copies may take up to 90 days to be fully removed\n• You will receive confirmation once deletion is complete\n• Some data may be retained as described in Section 3"
    },
    {
      title: "7. Right to Appeal",
      content: "If your deletion request is denied, we will provide you with a detailed explanation. You have the right to:\n\n• Request clarification on why your request was denied\n• Appeal the decision\n• File a complaint with the relevant data protection authority\n• Contact us to discuss alternative solutions"
    },
    {
      title: "8. Account Deletion",
      content: "Requesting data deletion does not automatically delete your account. If you wish to delete your account entirely, please:\n\n1. Log into your account\n2. Navigate to Account Settings\n3. Select \"Delete Account\"\n4. Follow the confirmation steps\n\nAccount deletion is permanent and cannot be undone. All associated data will be deleted according to this policy."
    },
    {
      title: "9. Contact Information",
      content: "For questions about data deletion or to submit a deletion request:\n\nEmail: support@devpositive.work\nData Protection Officer: [Name]\nAddress: [Your Address]\nPhone: [Your Phone Number]\n\nWe are committed to responding to all data deletion requests promptly and in accordance with applicable laws."
    }
  ];

  return (
    <div className="w-full">
      <SEOHead 
        title="Data Deletion Policy - Yesi Cepeda Benitez"
        description="Learn how to request deletion of your personal data and understand our data deletion policy."
      />
      
      <PageShell title="Data Deletion Policy" description="Last updated: January 2026">
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

export default DataDeletion;
