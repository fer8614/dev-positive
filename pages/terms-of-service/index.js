import React from "react";

// components
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

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
        title="Terms of Service - Yesid Fernando Cepeda B."
        description="Read our terms of service to understand the rules and conditions for using our website."
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
            Terms of <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">Service</span>
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
                         hover:border-accent-400/30 hover:bg-accent-400/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-accent-400 mb-4">
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

export default TermsOfService;
