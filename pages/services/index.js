//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";
import { FloatingCard } from "../../components/MicroInteractions";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="w-full relative py-16 sm:py-24 md:py-32 lg:py-44 flex items-center">
      <SEOHead 
        title="Services - Yesid Fernando Cepeda B. | Web Development Solutions"
        description="Discover my comprehensive web development services including frontend, backend, full-stack solutions, and modern web technologies expertise."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      <div className="fixed inset-0 bg-hero-gradient opacity-50 -z-10"></div>
      
      <Circles />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 md:pt-16">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center">
          
          {/* Enhanced text section */}
          <FloatingCard className="text-center flex xl:w-[35%] flex-col lg:text-left mb-8 xl:mb-0" delay={0.2}>
            <div className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <motion.h2
                className="h2 mb-6 bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                My Services<span className="text-accent">.</span>
              </motion.h2>
              
              <motion.p
                className="mb-6 text-white/80 leading-relaxed text-base sm:text-lg"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                I specialize in creating modern, scalable web solutions that drive business growth. 
                From concept to deployment, I deliver exceptional digital experiences using cutting-edge technologies.
              </motion.p>
              
              <motion.div
                className="grid grid-cols-2 gap-4 text-sm"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary-400">50+</div>
                  <div className="text-white/60">Projects</div>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent-400">5+</div>
                  <div className="text-white/60">Years Exp</div>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary-400">24/7</div>
                  <div className="text-white/60">Support</div>
                </div>
                <div className="glass-card p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent-400">100%</div>
                  <div className="text-white/60">Quality</div>
                </div>
              </motion.div>
            </div>
          </FloatingCard>

          {/* Enhanced slider section */}
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      
      <FloatingCard delay={0.8}>
        <Bulb />
      </FloatingCard>
    </div>
  );
};

export default Services;
