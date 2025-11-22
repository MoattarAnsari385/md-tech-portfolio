import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

// Import images
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Family Golf",
        link: "https://family-golf-one.vercel.app/",
        bgColor: "#333d15",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "K72",
        link: "https://k72-ca-two.vercel.app/",
        bgColor: "#753c3e",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Lazarev",
        link: "https://lazarev-mauve.vercel.app/",
        bgColor: "#0ba34e",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="text-white relative"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease"
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Main Heading - Centered */}
        <h2 className="text-3xl font-semibold z-10 text-center mb-8 sm:mb-12">
          My Work
        </h2>

        <div className="relative w-full max-w-[1200px] flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pb-20">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute w-full transition-all duration-500 ${
                activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              {/* Project Title - Left Aligned */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: activeIndex === idx ? 1 : 0, 
                  x: activeIndex === idx ? 0 : -50 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full mb-6 sm:mb-8"
              >
                <h3 className="text-[clamp(2rem,6vw,4rem)] text-white/95 italic font-semibold text-left">
                  {project.title}
                </h3>
              </motion.div>

              {/* Image Container - Centered */}
              <div className="w-full flex justify-center">
                <div
                  className="relative overflow-hidden bg-black/20 md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] rounded-lg sm:rounded-xl h-[55vh] sm:h-[58vh]"
                  style={{
                    width: '85%',
                    maxWidth: '1000px',
                    zIndex: 10,
                    transition: "box-shadow 250ms ease"
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                      transition: "filter 200ms ease",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Visit Link Button - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeIndex === idx ? 1 : 0, 
                  y: activeIndex === idx ? 0 : 20 
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="w-full flex justify-center mt-8 sm:mt-10 relative z-30"
              >
                
                  <a href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/95 backdrop-blur-sm rounded-lg text-black text-lg font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] inline-block"
                >
                  Visit Website
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}