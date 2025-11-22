

import { motion } from "framer-motion";
import p from "../assets/p.png"

export default function About() {
  const glows = [
    "top-0 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-20 blur-[120px] delay-300",
    "top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <motion.div
            className="relative w-[180px] h-[180px] rounded-3xl overflow-hidden shadow-2xl shrink-0"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-linear-to-br from-teal-400 to-cyan-300">
              <div className="w-full h-full flex items-center justify-center">
                <img src={p} alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl font-bold text-teal-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Moattar Ansari
            </motion.h1>
            
            <motion.h2 
              className="text-xl font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack & AI Engineer
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 leading-relaxed text-base max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I create modern, high-performance digital solutions with a focus on clean design and smooth UX. My skills include Agentic AI, chatbots, full-stack development, video editing, and graphic design turning ideas into polished, intelligent products.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div 
                className="bg-[#1a1f2e] border border-gray-700 rounded-xl px-6 py-4 min-w-[140px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <p className="text-gray-400 text-sm mb-1">Experience</p>
                <p className="text-white font-semibold text-lg">1+ years</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#1a1f2e] border border-gray-700 rounded-xl px-6 py-4 min-w-[140px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <p className="text-gray-400 text-sm mb-1">Speciality</p>
                <p className="text-white font-semibold text-lg">WEB & AI</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#1a1f2e] border border-gray-700 rounded-xl px-6 py-4 min-w-[140px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <p className="text-gray-400 text-sm mb-1">Focus</p>
                <p className="text-white font-semibold text-lg">Performance & UX</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.button 
                className="bg-white text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#f0f0f0",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className="bg-[#1a1f2e] text-white font-semibold px-6 py-3 rounded-lg border border-gray-700 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#252b3b",
                  borderColor: "#00bf8f",
                  boxShadow: "0 10px 30px rgba(0, 191, 143, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            About Me
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 leading-relaxed text-base max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            I'm a Software Developer, Content Creator, and Web Developer — passionate about building fast, resilient applications and sharing coding insights on Instagram and YouTube.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed text-base max-w-3xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            I love turning ideas into scalable, user-friendly products that make an impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}