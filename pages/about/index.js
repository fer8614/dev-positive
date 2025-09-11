import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wp" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="ps" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer - Freelance",
        stage: "2022 - Present",
      },
      {
        title: "Frontend Developer - Tech Startup",
        stage: "2021 - 2022",
      },
      {
        title: "Web Developer - Digital Agency",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Web Development Certification",
        stage: "2023",
      },
      {
        title: "React & Next.js Specialization",
        stage: "2022",
      },
      {
        title: "Police Administrator - General Santander Academy",
        stage: "2007",
      },
    ],
  },
];

// components
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full overflow-x-hidden" style={{WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}>
      <SEOHead 
        title="About - Yesid Fernando Cepeda B. | Full Stack Developer"
        description="Learn about my journey as a full-stack developer, skills in modern web technologies, and professional experience in creating innovative digital solutions."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      <div className="fixed inset-0 bg-hero-gradient opacity-50 -z-10"></div>
      
      <Circles />
      
      {/* Main content with proper spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-28 min-h-screen">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="h1 mb-6">
            About <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate <span className="text-primary-400 font-semibold">Full Stack Developer</span> dedicated to creating 
            innovative digital experiences and solving complex problems through code.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div 
            className="glass-card p-6 sm:p-8 rounded-2xl text-center backdrop-blur-sm border border-white/10 
                       hover:border-primary-400/30 hover:bg-primary-400/5 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-3">
              <CountUp start={0} end={2} duration={5} />+
            </div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider font-medium">
              Years Experience
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 sm:p-8 rounded-2xl text-center backdrop-blur-sm border border-white/10 
                       hover:border-accent-400/30 hover:bg-accent-400/5 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400 mb-3">
              <CountUp start={0} end={15} duration={5} />+
            </div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider font-medium">
              Projects Completed
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 sm:p-8 rounded-2xl text-center backdrop-blur-sm border border-white/10 
                       hover:border-primary-400/30 hover:bg-primary-400/5 transition-all duration-300 
                       sm:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-3">
              <CountUp start={0} end={8} duration={5} />+
            </div>
            <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider font-medium">
              Technologies
            </div>
          </motion.div>
        </motion.div>
        
        {/* Info Section */}
        <motion.div
          className="glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-white/10 mb-16 max-w-6xl mx-auto"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 justify-center">
            {aboutData.map((item, itemIndex) => {
              return (
                <motion.button
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "text-primary-400 bg-primary-400/10 border-primary-400/30"
                      : "text-white/70 bg-white/5 border-white/10 hover:text-primary-400 hover:bg-white/10"
                  } cursor-pointer capitalize text-sm sm:text-base font-medium
                       px-4 sm:px-6 py-2 sm:py-3 rounded-xl border transition-all duration-300
                       backdrop-blur-sm`}
                  onClick={() => setIndex(itemIndex)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </motion.button>
              );
            })}
          </div>
          
          {/* Content Grid */}
          <div className="grid gap-4 sm:gap-6">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <motion.div
                  key={itemIndex}
                  className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 
                           p-4 sm:p-6 rounded-xl glass-card border border-white/5 
                           hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-base sm:text-lg mb-2">
                      {item.title}
                    </div>
                    {item.stage && (
                      <div className="h-full bg-primary/30 py-32 text-center xl:text-left" style={{WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}>
                        <div className="text-primary-400 font-medium">
                          {item.stage}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {item.icons && (
                    <div className="flex gap-2 sm:gap-3 flex-wrap justify-start lg:justify-end">
                      {item.icons.map((icon, iconIndex) => {
                        return (
                          <motion.div 
                            key={iconIndex} 
                            className="text-xl sm:text-2xl text-white/70 hover:text-primary-400 
                                       transition-all duration-300 p-2 sm:p-3 rounded-lg 
                                       hover:bg-white/10 cursor-pointer backdrop-blur-sm"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            title={`Technology ${iconIndex + 1}`}
                          >
                            {icon}
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
