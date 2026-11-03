import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const exploreLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
];
const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Data Deletion", path: "/data-deletion" },
];

const Footer = () => (
  <footer aria-label="Site footer" className="site-footer relative z-10 border-t border-white/10">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:pr-40">
      <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-10 sm:flex-row sm:items-center lg:py-12">
        <div>
          <p className="site-eyebrow">The next chapter</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let&apos;s build something useful.</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">A role to fill or an idea to bring to life? Let&apos;s talk about the next step.</p>
        </div>
        <Link href="/contact" className="site-button shrink-0">Start a conversation <BsArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="grid gap-9 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-12">
        <div>
          <Link href="/" aria-label="DevPositive home" className="inline-flex items-center gap-3 rounded-lg">
            <Image src="/logo-2.png" width={32} height={36} alt="" className="h-9 w-8 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-white">DevPositive<span className="text-violet-300">.</span></span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">Full-stack development for teams and businesses. Thoughtful interfaces. Solid foundations.</p>
          <a href="mailto:support@devpositive.work" className="mt-4 inline-block min-h-[44px] break-all py-2 text-sm text-violet-200 hover:text-white">support@devpositive.work</a>
        </div>
        <nav aria-label="Explore the site">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">Explore</h2>
          <ul className="space-y-1">{exploreLinks.map((link) => (
            <li key={link.path}><Link href={link.path} className="inline-flex min-h-[40px] items-center text-sm text-slate-400 hover:text-violet-200">{link.name}</Link></li>
          ))}</ul>
        </nav>
        <nav aria-label="Legal information">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">Legal</h2>
          <ul className="space-y-1">{legalLinks.map((link) => (
            <li key={link.path}><Link href={link.path} className="inline-flex min-h-[40px] items-center text-sm text-slate-400 hover:text-violet-200">{link.name}</Link></li>
          ))}</ul>
        </nav>
      </div>
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Yesid F Cepeda. All rights reserved.</p>
        <span>Built with care. Made to connect.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
