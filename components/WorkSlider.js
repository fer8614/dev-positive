// import next link
import Link from "next/link";

// data
const workSlides = [
  {
    href: "https://comfy-banoffee-2a9372.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/crytoCurrency.png",
    title: "Crypto Currency",
    description:
      "Real-time cryptocurrency quote project consuming API and using React +  TypeScript + Vite, ZOD and Zustand.",
  },
  {
    href: "https://chimerical-youtiao-bd2ad2.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/weatherFinder.png",
    title: "Weather Finder",
    description:
      "Weather finder project consuming API with React + Vite + Typescript.",
  },
  {
    href: "https://github.com/fer8614/Node-NOC/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/node-noc-app.png",
    title: "Node NOC APP",
    description:
      "Network operation center NOC, using Clean Architecture with TypeScript for sending emails and create databases with MongoDb and PostgreSQL.",
  },
  {
    href: "https://github.com/fer8614/Node-TypeScript-Express-Rest/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/rest-project-2.png",
    title: "Rest Project",
    description:
      "Rest Project + TypeScript with mongoDB, express, ngrok and docker.",
  },
  {
    href: "https://delightful-fox-97e7e1.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/expense-planner.png",
    title: "Expense Planner",
    description:
      "Web application to control expenses with React + React-Swipeable-List + TypeScript + Vite with Context API for global state",
  },
  {
    href: "https://super-tanuki-7e93aa.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/Patient-follow-up.png",
    title: "Patient Follow Up",
    description:
      "Web application to track patients in a veterinary clinic using React Hook Form + TypeScript + Vite with Zustand and Tailwind",
  },
  {
    href: "https://jolly-faloodeh-5b1f8a.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/calorie-tracker.png",
    title: "Calorie Tracker",
    description:
      "This project was developed with Typescript, Tailwind, React + Vite with useReducer and localStorage",
  },
  {
    href: "https://deft-scone-4f45f6.netlify.app/",
    rel: "noopener noreferrer",
    target: "_blank",
    src: "/tip-calculator.png",
    title: "Tip Calculator",
    description:
      "This project was developed with Typescript, Tailwind, and React with useReducer",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// Next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {workSlides.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {/* link */}
              <Link href={image.href} target="_blank" rel="noopener noreferrer">
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center group"
                >
                  {/* image */}
                  <Image
                    className="flex content-center items-center justify-center relative overflow-hidden"
                    src={image.src}
                    width={500}
                    height={300}
                    alt={image.title}
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300 text-center">
                    <div className="items-center text-[13px] tracking-[0.2em]">
                      <div className="delay-100 font-bold ">{image.title}</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        {image.description}
                      </div>
                      <div className="text-xl font-bold translate-x-[-500%] group-hover:translate-x-[50%] transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
