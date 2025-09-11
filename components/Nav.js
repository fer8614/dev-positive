// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 left-0 right-0 mt-auto 
    xl:right-[2%] xl:left-auto z-[9999] xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-center xl:justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 xl:gap-y-10 
      px-0 xl:px-0 h-[80px] xl:h-max py-8 glass-nav text-2xl sm:text-3xl xl:text-xl xl:rounded-full
      shadow-glass transition-all duration-300 hover:shadow-glow overflow-visible max-w-sm mx-auto xl:max-w-none xl:mx-0"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && " text-primary-500 shadow-glow"} 
                        relative flex items-center justify-center group hover:text-primary-500 transition-all duration-300
                        hover:scale-110 hover:shadow-glow min-w-[40px] min-h-[40px]`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="glass-card relative flex text-white items-center p-[8px] rounded-lg">
                  <div className="text-[12px] leading-none font-medium capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white/20 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
