// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-16 xl:px-0 xl:h-[120px]">
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-6 
                       py-4 sm:py-6 lg:py-8 glass-card rounded-xl lg:rounded-2xl 
                       px-4 sm:px-6 lg:px-8 shadow-glass backdrop-blur-xl">
          {/* logo */}
          <Link href={"/"} className="group transition-all duration-300 hover:scale-105 flex flex-col items-center lg:items-start">
            <Image
              src={"/logo.png"}
              width={180}
              height={40}
              alt=""
              priority={true}
              className="transition-all duration-300 group-hover:drop-shadow-lg sm:w-[200px] sm:h-[44px] lg:w-[220px] lg:h-[48px]"
            />
            <span className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-tight 
                           mb-2 lg:mb-4 font-bold mt-2 lg:mt-0
                           bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent
                           transition-all duration-300 group-hover:from-primary-400 group-hover:to-accent-600
                           text-center lg:text-left">
              Yesid Fernando Cepeda B.
            </span>
          </Link>
          {/* socials */}
          <div className="transition-all duration-300 hover:scale-105 mt-2 lg:mt-0">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
