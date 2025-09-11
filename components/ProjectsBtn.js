// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 flex justify-center relative">
      <Link
        href={"/work"}
        className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[185px] md:h-[185px] 
                   flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat 
                   group transition-all duration-500 hover:scale-110"
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 rounded-full glass-card opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        
        {/* Rotating text - Responsive */}
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[105px] max-h-[110px] sm:max-w-[125px] sm:max-h-[130px] md:max-w-[141px] md:max-h-[148px]
                     group-hover:animate-pulse transition-all duration-300"
        />
        
        {/* Enhanced arrow with glow effect - Responsive */}
        <div className="absolute flex items-center justify-center">
          <HiArrowRight className="text-2xl sm:text-3xl md:text-4xl group-hover:translate-x-2 group-hover:text-primary-400 
                                   transition-all duration-300 group-hover:drop-shadow-lg
                                   group-hover:animate-pulse" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 
                        opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl -z-10 
                        group-hover:animate-pulse"></div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
