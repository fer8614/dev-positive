import React from "react";

// components
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

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
        title="Data Deletion Policy - Yesid Fernando Cepeda B."
        description="Learn how to request deletion of your personal data and understand our data deletion policy."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      <div className="fixed inset-0 bg-hero-gradient opacity-50 -z-10"></div>
      
      <Circles />
      
      {/* Main content with proper spacing */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-28 min-h-screen">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="h1 mb-6">
            Data Deletion <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Last updated: January 2026
          </p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10 
                         hover:border-primary-400/30 hover:bg-primary-400/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary-400 mb-4">
                {section.title}
              </h2>
              <p className="text-white/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DataDeletion;
