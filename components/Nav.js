import Link from "next/link";
import { useRouter } from "next/router";
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";

export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Projects", path: "/work", icon: <HiViewColumns /> },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav aria-label="Main navigation" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-sm rounded-2xl border border-white/15 bg-[#151822]/95 p-2 shadow-xl backdrop-blur-md xl:inset-x-auto xl:bottom-auto xl:right-5 xl:top-1/2 xl:-translate-y-1/2">
      <div className="grid grid-cols-4 gap-1 xl:grid-cols-1 xl:gap-2">
        {navData.map((link) => (
          <Link key={link.path} href={link.path} aria-current={pathname === link.path ? "page" : undefined} className={`flex min-h-[56px] flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[10px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300 motion-reduce:transition-none xl:min-w-[76px] ${pathname === link.path ? "bg-violet-300/15 text-violet-200" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
            <span aria-hidden="true" className="text-lg">{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
