import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStack = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "GSAP", logo: "/logos/gsap.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Spline", logo: "/logos/spline.svg" },
  { name: "Framer Motion", logo: "/logos/framer-motion.svg" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies I work with daily
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-20 h-20 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center mb-3">
                <motion.img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 object-contain"
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Bubble Background */}
        <motion.div
          className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
