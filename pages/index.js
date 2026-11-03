import Image from "next/image";
import Link from "next/link";
import { BsArrowDownRight, BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import SEOHead from "../components/SEOHead";
import { workSlides } from "../components/WorkSlider";

const featuredProjects = workSlides.filter((project) => project.featured);
const spotlight = featuredProjects[0];
const actionStyle = "inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300";

const Home = () => (
  <div className="relative z-10 bg-[#0b0d14]">
    <SEOHead
      title="Yesid F Cepeda — Full Stack Developer | DevPositive"
      description="Full-stack development for teams and businesses. Explore Yesid F Cepeda's web applications, technical experience and ways to work together."
    />

    <section aria-labelledby="intro-heading" className="relative overflow-hidden border-b border-white/10">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-56 sm:px-8 sm:pt-44 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pb-24 lg:pt-48 xl:pr-40">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
            <span aria-hidden="true" className="h-px w-8 bg-violet-400" />
            Full Stack Developer
          </p>
          <h1 id="intro-heading" className="max-w-2xl text-[clamp(2.8rem,6vw,5.3rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
            Good ideas deserve <span className="text-violet-300">great software.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m <span className="font-medium text-slate-100">Yesid F Cepeda</span>.
            I build thoughtful web experiences, connecting clean interfaces with solid backends — for teams and businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#selected-work" className={`${actionStyle} bg-violet-300 text-slate-950 hover:bg-violet-200`}>
              View projects <BsArrowDownRight aria-hidden="true" />
            </Link>
            <Link href="/contact" className={`${actionStyle} border border-white/15 text-white hover:border-white/40 hover:bg-white/5`}>
              Let&apos;s talk <BsArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-xs tracking-wide text-slate-400" aria-label="Core technologies">
            {["React", "Next.js", "TypeScript", "Node.js"].map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>

        <Link href={spotlight.href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${spotlight.title} live demo`} className="group relative block rounded-3xl border border-white/10 bg-[#141720] p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:p-5">
          <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-400">
            <span>From the workshop</span>
            <span className="flex gap-1.5" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-violet-300" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/20" /></span>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-800">
            <Image src={spotlight.src} alt={`${spotlight.title} application preview`} fill priority sizes="(max-width: 959px) 90vw, 40vw" className={`${spotlight.imageFit === "contain" ? "object-contain bg-white" : "object-cover"} object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none`} />
          </div>
          <div className="flex items-center justify-between gap-4 pb-1 pt-5">
            <div><p className="text-sm font-medium text-white">{spotlight.title}</p><p className="mt-1 text-xs text-slate-400">{spotlight.tagline || spotlight.description}</p></div>
            <span aria-hidden="true" className="rounded-full border border-white/15 p-3 text-violet-300"><BsArrowUpRight /></span>
          </div>
        </Link>
      </div>
    </section>

    <section id="selected-work" aria-labelledby="work-heading" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-16 sm:px-8 lg:py-24 xl:pr-40">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div><p className="mb-3 text-xs uppercase tracking-[0.2em] text-violet-300">Selected work</p><h2 id="work-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ideas turned into experiences.</h2></div>
        <Link href="/work" className="inline-flex min-h-[44px] items-center gap-2 text-sm text-slate-300 hover:text-violet-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">All projects <BsArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <article key={project.title} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12151e]">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-800">
              <Image src={project.src} alt={`${project.title} application preview`} fill sizes="(max-width: 767px) 90vw, 45vw" className={`${project.imageFit === "contain" ? "object-contain bg-white" : "object-cover"} object-top transition-transform duration-500 motion-safe:group-hover:scale-105 motion-reduce:transition-none`} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400"><span className="inline-flex items-center gap-2">Full-stack application {project.ai && <span role="img" aria-label="AI-enabled project" className="rounded-full border border-violet-300/30 bg-violet-300/10 px-2 py-0.5 text-violet-200">AI</span>}</span><span>0{index + 1}</span></div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
              <p className="mb-5 mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <ul className="mb-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tags.slice(0, 3).map((tag) => <li key={tag} className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-300">{tag}</li>)}
              </ul>
              <Link href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`} className="mt-auto inline-flex min-h-[44px] items-center justify-between border-t border-white/10 pt-4 text-sm text-violet-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">View live <BsArrowUpRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="collaborate-heading" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:pb-24 xl:pr-40">
      <div className="mb-8 border-t border-white/10 pt-12"><p className="mb-3 text-xs uppercase tracking-[0.2em] text-violet-300">Two ways to connect</p><h2 id="collaborate-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Good work starts with a conversation.</h2></div>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { title: "For recruiters", description: "Looking for a developer for your team? Get to know my skills, background and approach to building software.", href: "/about", action: "Explore my experience", number: "01" },
          { title: "For clients", description: "Have a business challenge or a product idea? Let's explore how a thoughtful web application can help.", href: "/contact", action: "Discuss a project", number: "02" },
        ].map((audience) => (
          <div key={audience.title} className="rounded-2xl border border-white/10 bg-[#12151e] p-7 sm:p-8">
            <span aria-hidden="true" className="text-xs text-violet-300">{audience.number} /</span>
            <h3 className="mb-3 mt-5 text-xl font-medium text-white">{audience.title}</h3>
            <p className="max-w-md text-sm leading-7 text-slate-400">{audience.description}</p>
            <Link href={audience.href} className="mt-6 inline-flex min-h-[44px] items-center gap-3 text-sm font-medium text-violet-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">{audience.action} <BsArrowRight aria-hidden="true" /></Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
