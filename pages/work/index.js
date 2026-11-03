import Link from "next/link";
import { HiUser, HiBriefcase, HiArrowUpRight } from "react-icons/hi2";
import WorkSlider, { workSlides, matchesCategory } from "../../components/WorkSlider";
import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const audiences = [
  {
    label: "For recruiters",
    title: "Skills behind the projects.",
    action: "Explore my experience",
    href: "/about",
    accessibleName: "For recruiters: explore my experience",
    icon: <HiUser aria-hidden="true" />,
  },
  {
    label: "For clients",
    title: "Let’s shape your next idea.",
    action: "Discuss a project",
    href: "/contact",
    accessibleName: "For clients: discuss a project",
    icon: <HiBriefcase aria-hidden="true" />,
  },
];
const overview = [
  { label: "Projects", filter: "all" },
  { label: "Full Stack", filter: "fullstack" },
  { label: "With AI", filter: "ai" },
];

const WorkOpportunities = () => (
  <aside aria-label="Explore opportunities" className="site-surface border-violet-300/20 p-4 sm:p-5">
    <p className="mb-4 text-xs font-medium tracking-wide text-slate-300">Find your next step.</p>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {audiences.map((audience) => (
        <Link key={audience.href} href={audience.href} aria-label={audience.accessibleName} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-violet-300/30 hover:bg-violet-300/5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-300/10 text-lg text-violet-200">{audience.icon}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-violet-300">{audience.label}</span>
            <span className="mt-1 block text-sm font-medium text-white">{audience.title}</span>
            <span className="mt-1 block text-xs text-slate-400 group-hover:text-violet-200">{audience.action}</span>
          </span>
          <HiArrowUpRight aria-hidden="true" className="shrink-0 text-slate-400 group-hover:text-violet-200" />
        </Link>
      ))}
    </div>
    <dl aria-label="Project overview" className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
      {overview.map((metric) => (
        <div key={metric.filter} className="flex flex-col gap-1">
          <dt className="order-2 text-[10px] font-medium uppercase tracking-wide text-slate-400">{metric.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight text-violet-200">{workSlides.filter((project) => matchesCategory(project, metric.filter)).length}</dd>
        </div>
      ))}
    </dl>
  </aside>
);

const Work = () => (
  <>
    <SEOHead
      title="Work - Yesid F Cepeda | Portfolio & Projects"
      description="Explore my portfolio of innovative web development projects. From modern web applications to creative digital solutions, see how I bring ideas to life through code."
    />
    <PageShell
      eyebrow="Selected work · Full stack & AI"
      title={<><span className="block">Real projects.</span><span className="block text-violet-300">Practical solutions.</span></>}
      description="Web products, robust APIs and AI-assisted tools — built with care from interface to backend. Explore the projects, then let's talk about what comes next."
      aside={<WorkOpportunities />}
    >
      <WorkSlider />
    </PageShell>
  </>
);

export default Work;
