import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Data Deletion", path: "/data-deletion" },
  ];

  return (
    <footer className="relative z-10 w-full bg-gradient-to-t from-primary-950/80 via-transparent to-transparent border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8"
        >
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary-400 mb-2">DevPositive</h3>
            <p className="text-white/60 text-sm text-center md:text-left">
              Full Stack Developer crafting innovative digital experiences
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-white/60 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a
              href="mailto:support@devpositive.work"
              className="text-white/60 hover:text-primary-400 transition-colors duration-300 text-sm"
            >
              support@devpositive.work
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-xs sm:text-sm"
        >
          <p>
            &copy; {currentYear} Yesid Fernando Cepeda B. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
