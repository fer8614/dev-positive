import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => (
  <header className="absolute inset-x-0 top-0 z-40">
    <a href="#main-content" className="sr-only rounded-lg bg-violet-200 px-4 py-3 text-slate-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">Skip to content</a>
    <div className="mx-auto flex max-w-7xl flex-col gap-4 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 xl:pr-40">
      <Link href="/" aria-label="DevPositive home" className="inline-flex w-fit items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">
        <Image src="/logo-2.png" width={36} height={40} alt="" priority className="h-10 w-9 object-contain" />
        <span><span className="block text-lg font-semibold tracking-tight text-white">DevPositive<span className="text-violet-300">.</span></span><span className="block text-[10px] tracking-wide text-slate-400">Yesid F Cepeda</span></span>
      </Link>
      <div className="[&_a]:rounded-full [&_a]:border-0 [&_a]:bg-transparent [&_a]:p-2 [&_a]:text-slate-400 [&_a]:shadow-none [&_a]:backdrop-blur-none [&_a:hover]:bg-white/5 [&_a:hover]:text-violet-200 [&_a:hover]:shadow-none [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-violet-300"><Socials /></div>
    </div>
  </header>
);

export default Header;
