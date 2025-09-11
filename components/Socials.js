// links
import Link from "next/link";

//icons
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiYoutubeFill,
  RiTiktokFill,
  RiXingFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 text-lg sm:text-xl">
      <Link
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={"https://github.com/fer8614"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-primary-400 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiGithubFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/y-fernando-cepeda-b-/"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-blue-400 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiLinkedinBoxFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
      <Link
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={"https://www.instagram.com/devpostive/"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-pink-400 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiInstagramFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
      <Link
        href={"https://www.tiktok.com/@devpositive/"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-gray-300 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiTiktokFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
      <Link
        href={"https://www.youtube.com/@DevPositive/"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-gray-300 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiYoutubeFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
      <Link
        href={"https://x.com/fer_cepeda86"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-card hover:text-gray-300 transition-all duration-300 
                   hover:scale-110 hover:shadow-glow hover:bg-white/20 group"
      >
        <RiTwitterXFill className="transition-transform duration-300 group-hover:rotate-12" />
      </Link>
    </div>
  );
};

export default Socials;
