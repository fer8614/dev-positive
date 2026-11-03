import ServiceSlider from "../../components/ServiceSlider";
import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const Services = () => (
  <>
    <SEOHead
      title="Services - Yesid F Cepeda | Web Development Solutions"
      description="Discover my comprehensive web development services including frontend, backend, full-stack solutions, and modern web technologies expertise."
    />
    <PageShell
      eyebrow="Services"
      title="My Services."
      description="I specialize in creating modern, scalable web solutions that drive business growth. From concept to deployment, I deliver exceptional digital experiences using cutting-edge technologies."
    >
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[["50+", "Projects"], ["5+", "Years Exp"], ["24/7", "Support"], ["100%", "Quality"]].map(([value, label]) => (
          <div key={label} className="site-surface p-5">
            <div className="text-2xl font-semibold text-violet-300">{value}</div>
            <div className="mt-1 text-sm text-slate-400">{label}</div>
          </div>
        ))}
      </div>
      <ServiceSlider />
    </PageShell>
  </>
);

export default Services;
