import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight, BsGithub, BsGlobe } from "react-icons/bs";

// data
const workSlides = [
  {
    href: "https://linkhubf.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/linkhub.png",
    title: "LinkHub",
    description:
      "A single link for all your social media accounts, with a photo and description.",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    featured: true,
  },
  {
    href: "https://task-f-low-front-end.vercel.app/auth/login/",
    github: "https://github.com/fer8614",
    src: "/taskflow.png",
    title: "TaskFlow",
    description:
      "Project and Task Manager with authentication, real-time updates and collaborative features.",
    tags: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "React Query", "Tailwind"],
    category: "fullstack",
    featured: true,
  },
  {
    href: "https://frontend-product-manager-react-node-express-ts.vercel.app/",
    github: "https://github.com/fer8614",
    src: "/product-manager.png",
    title: "Product Manager",
    description:
      "Full Stack PERN application for managing products with CRUD operations and a modern UI.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript", "Tailwind"],
    category: "fullstack",
    featured: true,
  },
  {
    href: "https://effervescent-maamoul-b50b9d.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/coktail.png",
    title: "Drink Recipes Finder",
    description:
      "A drinks and recipes search engine consuming a public API with advanced filtering.",
    tags: ["React", "TypeScript", "Zustand", "Axios", "Zod", "Tailwind"],
    category: "frontend",
  },
  {
    href: "https://comfy-banoffee-2a9372.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/cryptoCurrency.png",
    title: "Crypto Currency",
    description:
      "Real-time cryptocurrency quotes consuming API with live price updates.",
    tags: ["React", "TypeScript", "Vite", "Zod", "Zustand"],
    category: "frontend",
  },
  {
    href: "https://chimerical-youtiao-bd2ad2.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/weatherFinder.png",
    title: "Weather Finder",
    description:
      "Weather finder consuming a public API with location-based search.",
    tags: ["React", "Vite", "TypeScript"],
    category: "frontend",
  },
  {
    href: "https://github.com/fer8614/Node-NOC/",
    github: "https://github.com/fer8614/Node-NOC/",
    src: "/node-noc-app.png",
    title: "Node NOC APP",
    description:
      "Network operation center using Clean Architecture for monitoring, email alerts, and multi-database logging.",
    tags: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Clean Architecture"],
    category: "backend",
  },
  {
    href: "https://github.com/fer8614/Node-TypeScript-Express-Rest/",
    github: "https://github.com/fer8614/Node-TypeScript-Express-Rest/",
    src: "/rest-project-2.png",
    title: "REST API Project",
    description:
      "RESTful API built with Express, MongoDB and Docker for containerized deployment.",
    tags: ["Node.js", "TypeScript", "MongoDB", "Express", "Docker"],
    category: "backend",
  },
  {
    href: "https://delightful-fox-97e7e1.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/expense-planner.png",
    title: "Expense Planner",
    description:
      "Web application to control expenses with swipeable lists and global state management.",
    tags: ["React", "TypeScript", "Vite", "Context API"],
    category: "frontend",
  },
  {
    href: "https://super-tanuki-7e93aa.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/Patient-follow-up.png",
    title: "Patient Follow Up",
    description:
      "Web application to track patients in a veterinary clinic with form validation.",
    tags: ["React", "TypeScript", "React Hook Form", "Zustand", "Tailwind"],
    category: "frontend",
  },
  {
    href: "https://jolly-faloodeh-5b1f8a.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/calorie-tracker.png",
    title: "Calorie Tracker",
    description:
      "Track calories and activities with persistent local storage and reducers.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    category: "frontend",
  },
  {
    href: "https://deft-scone-4f45f6.netlify.app/",
    github: "https://github.com/fer8614",
    src: "/tip-calculator.png",
    title: "Tip Calculator",
    description:
      "Calculate tips and split bills with an intuitive and responsive interface.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "frontend",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`glass-card rounded-2xl overflow-hidden border border-white/10 
                  hover:border-primary-400/30 transition-all duration-500 group flex flex-col
                  ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.src}
          width={600}
          height={340}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent 
                        opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-accent-500/90 text-white text-[10px] sm:text-xs font-bold 
                          px-2.5 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
            Featured
          </div>
        )}

        {/* Quick Links Overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 
                        translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                       text-white hover:bg-primary-400/30 hover:border-primary-400/40 transition-all duration-300"
            title="View Live"
          >
            <BsGlobe className="text-sm" />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                         text-white hover:bg-primary-400/30 hover:border-primary-400/40 transition-all duration-300"
              title="View Code"
            >
              <BsGithub className="text-sm" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title & Category */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-medium 
                           bg-white/5 px-2 py-0.5 rounded-full border border-white/10 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-primary-400/10 text-primary-400 
                         border border-primary-400/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 
                     hover:text-primary-400 transition-colors duration-300 group/link mt-auto"
        >
          View Project
          <BsArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

const WorkSlider = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? workSlides
    : workSlides.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium 
                        border backdrop-blur-sm transition-all duration-300 cursor-pointer
                        ${activeCategory === cat.id
                          ? "bg-primary-400/15 text-primary-400 border-primary-400/30 shadow-glow"
                          : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                        }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.label}
            <span className="ml-2 text-[10px] sm:text-xs opacity-60">
              ({cat.id === "all" ? workSlides.length : workSlides.filter((p) => p.category === cat.id).length})
            </span>
          </motion.button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Count */}
      <motion.p
        layout
        className="text-center text-white/40 text-xs sm:text-sm mt-8 sm:mt-10"
      >
        Showing {filteredProjects.length} of {workSlides.length} projects
      </motion.p>
    </div>
  );
};

export default WorkSlider;
