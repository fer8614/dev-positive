//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SEOHead from "../../components/SEOHead";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="w-full overflow-x-hidden relative py-16 sm:py-24 md:py-32 lg:py-44 pb-24 sm:pb-28">
      <SEOHead 
        title="Work - Yesid Fernando Cepeda B. | Portfolio & Projects"
        description="Explore my portfolio of innovative web development projects. From modern web applications to creative digital solutions, see how I bring ideas to life through code."
      />
      
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 -z-10"></div>
      <div className="fixed inset-0 bg-hero-gradient opacity-50 -z-10"></div>
      
      <Circles />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 md:pt-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="h1 mb-8">
            My <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">Work</span>
          </h1>
          <motion.p
            className="text-lg text-white/80 leading-relaxed mb-8"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I&apos;m a <span className="text-primary-400 font-semibold">software developer</span> with experience in building innovative and functional solutions. 
            On this page, you&apos;ll find a selection of my most noteworthy projects, showcasing my passion for technology, 
            clean design, and efficient code. Each project represents a challenge overcome and an idea brought to life. 
            I invite you to explore my work and see how I can bring value to your ideas or your business.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center">
          {/* Projects Section Title */}
          <div className="text-center flex xl:w-[35%] flex-col lg:text-left mb-8 xl:mb-0">
            <motion.h2
              className="h2 mb-6"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-[400px] mx-auto lg:mx-0 leading-relaxed"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Explore my latest projects and see the technologies and creative solutions I&apos;ve implemented.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
