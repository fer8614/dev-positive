import React from "react";

// components
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

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
        title="Privacy Policy - Yesid Fernando Cepeda B."
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
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
            Privacy <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">Policy</span>
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

export default PrivacyPolicy;
