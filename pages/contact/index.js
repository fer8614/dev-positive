// components
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";
import { MagneticButton, RippleEffect } from "../../components/MicroInteractions";
import { AccessibleButton } from "../../components/AccessibilityFeatures";

// icons
import { BsArrowRight } from "react-icons/bs";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

// framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden relative py-16 sm:py-24 md:py-32 lg:py-44 pb-24 sm:pb-28">
      <SEOHead 
        title="Contact - Yesid Fernando Cepeda B. | Get In Touch"
        description="Ready to collaborate? Contact me for web development projects, consultations, or any questions about modern web solutions."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      <div className="fixed inset-0 bg-hero-gradient opacity-50 -z-10"></div>
      
      <Circles />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center xl:text-left flex items-center justify-center min-h-screen relative z-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 sm:pb-28">
        <div className="flex flex-col xl:flex-row w-full max-w-7xl gap-8 xl:gap-16">
          
          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col xl:w-1/3 space-y-6"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h2 className="h2 mb-6 bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Ready to bring your ideas to life? I&apos;m here to help you create amazing digital experiences.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <HiMail className="text-2xl text-primary-400" />
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white font-medium">fernando.inversionmf@gmail.com</p>
                  </div>
                </motion.div>
                
                {/* <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <HiPhone className="text-2xl text-primary-400" />
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.div> */}
                
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/5 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <HiLocationMarker className="text-2xl text-primary-400" />
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">Keizer, Oregon</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="flex flex-col xl:w-2/3"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Send me a message
              </h3>
              
              <form className="space-y-6">
                {/* Input group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="input w-full"
                      required
                      aria-label="Your Name"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="input w-full"
                      required
                      aria-label="Your Email"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="input w-full"
                    required
                    aria-label="Subject"
                  />
                </div>
                
                <div className="relative">
                  <textarea 
                    placeholder="Your Message" 
                    className="textarea w-full min-h-[150px] resize-y"
                    required
                    aria-label="Your Message"
                  ></textarea>
                </div>
                
                <RippleEffect className="inline-block">
                  <MagneticButton className="btn glass-card px-8 py-4 rounded-full border border-white/20 
                                           hover:border-accent-400 transition-all duration-300 
                                           flex items-center justify-center gap-3 group
                                           bg-gradient-to-r from-primary-600/50 to-accent-600/50
                                           hover:from-accent-500/50 hover:to-primary-500/50">
                    <span className="font-medium">Send Message</span>
                    <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </MagneticButton>
                </RippleEffect>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
