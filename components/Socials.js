// links
import Link from "next/link";

//icons
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={"https://github.com/fer8614"}
        className="hover:text-accent translate-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/y-fernando-cepeda-b-/"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        target={"_blank"}
        rel={"noreferrer noopener"}
        href={"https://www.instagram.com/fernandoc_mf/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={"https://x.com/fer_cepeda86"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXFill />
      </Link>
    </div>
  );
};

export default Socials;
