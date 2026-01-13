// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import AnimatedText from "../components/AnimatedText";
import SEOHead from "../components/SEOHead";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="w-full relative">
      <SEOHead 
        title="Yesid Fernando Cepeda B. - Full Stack Developer Portfolio"
        description="Welcome to my modern portfolio showcasing full-stack development expertise in React, Next.js, Node.js and cutting-edge web technologies."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-hero-gradient -z-10"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      
      {/* Background Elements */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* particles */}
        <ParticlesContainer />
      </div>
      
      {/* text */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="text-center flex flex-col justify-center xl:text-left w-full container mx-auto 
                       px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40 lg:py-32">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-8 sm:mt-12 md:mt-16 relative"
          >
            <span className="block text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight">
              Code Your Future
            </span>
            <span className="block text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-tight bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 bg-clip-text text-transparent">
              Design Your Success
            </span>
          </motion.h1>
          
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm sm:max-w-md md:max-w-lg xl:max-w-2xl mx-auto xl:mx-0 
                       mb-8 sm:mb-10 xl:mb-16 text-base sm:text-lg leading-relaxed
                       glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10"
          >
            Hello! I&apos;m a passionate <span className="text-primary-400 font-semibold">Full Stack Developer</span>. 
            My journey into web development began with a curiosity about how websites work, and
            it quickly turned into a <span className="text-accent-400 font-semibold">full-fledged passion</span>.
          </motion.p>
          
          {/* Enhanced CTA section */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-4 sm:gap-6 z-10"
          >
            <div className="scale-75 sm:scale-90 md:scale-100">
              <ProjectsBtn />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col xl:flex-row items-center gap-2 xl:gap-4"
            >
              <div className="w-12 xl:w-px h-px xl:h-12 bg-gradient-to-r xl:bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="text-center xl:text-left">
                <p className="text-white/60 text-xs sm:text-sm mb-1">Ready to collaborate?</p>
                <p className="text-primary-400 font-medium text-sm sm:text-base">Let&apos;s build something amazing</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Image - Responsive */}
      <div className="hidden md:block w-full md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-full absolute right-0 bottom-0 z-0">
        {/* Enhanced bg img with modern overlay */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
          w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-20 md:opacity-30"
        ></div>
        
        {/* Modern geometric shapes - Responsive */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 
                       bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl md:blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 
                       bg-gradient-to-br from-accent-400/20 to-primary-600/20 rounded-full blur-xl md:blur-2xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* particles */}
        <div className="relative z-10 opacity-60 md:opacity-100">
          <ParticlesContainer />
        </div>
        
        {/* avatar img with enhanced animation - Responsive */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] max-h-[350px] md:max-w-[400px] md:max-h-[450px] 
                     lg:max-w-[500px] lg:max-h-[550px] absolute bottom-0 right-0 
                     md:bottom-0 md:right-[5%] lg:right-[10%] xl:right-[15%] z-20"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Avatar />
            {/* Glow effect behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent rounded-full blur-xl md:blur-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
