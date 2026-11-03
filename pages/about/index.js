import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />,
          <FaReact key="react" />, <SiNextdotjs key="next" />,
          <SiFramer key="framer" />, <FaWordpress key="wp" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="ps" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Full Stack Developer - Freelance", stage: "2022 - Present" },
      { title: "Frontend Developer - Tech Startup", stage: "2021 - 2022" },
      { title: "Web Developer - Digital Agency", stage: "2020 - 2021" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Full Stack Web Development Certification", stage: "2023" },
      { title: "React & Next.js Specialization", stage: "2022" },
      { title: "Police Administrator - General Santander Academy", stage: "2007" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <SEOHead
        title="About - Yesid F Cepeda | Full Stack Developer"
        description="Learn about my journey as a full-stack developer, skills in modern web technologies, and professional experience in creating innovative digital solutions."
      />
      <PageShell
        eyebrow="About"
        title="About Me"
        description="Passionate Full Stack Developer dedicated to creating innovative digital experiences and solving complex problems through code."
      >
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            ["2+", "Years Experience"],
            ["15+", "Projects Completed"],
            ["8+", "Technologies"],
          ].map(([value, label]) => (
            <div key={label} className="site-surface p-6">
              <div className="mb-2 text-3xl font-semibold text-violet-300">{value}</div>
              <div className="text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>

        <section className="site-surface p-6 sm:p-8" aria-label="About details">
          <div className="mb-8 flex flex-wrap gap-3" aria-label="About categories">
            {aboutData.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                aria-pressed={index === itemIndex}
                className={`${index === itemIndex ? "site-button" : "site-button-secondary"} capitalize`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="divide-y divide-white/10">
            {aboutData[index].info.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-white">{item.title}</h2>
                  {item.stage && <p className="mt-1 text-sm text-violet-300">{item.stage}</p>}
                </div>
                {item.icons && (
                  <div className="flex flex-wrap gap-4 text-2xl text-slate-400">
                    {item.icons.map((icon, iconIndex) => (
                      <span key={iconIndex} title={`Technology ${iconIndex + 1}`}>{icon}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default About;
