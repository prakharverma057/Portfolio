import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitHub, ExternalLink } from "react-feather";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Zentry - Metagame Marketplace",
      description:
        "A clone of Awwwards.com website; zentry.com. Build with Custom media kits.",
      image: "/zenclone.png",
      tech: ["React", "GSAP", "TailwindCSS", "UI kits"],
      github: "https://github.com/prakharverma057/AwwwardsGame",
      demo: "https://zenclone.netlify.app",
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "Collaborative project management tool with real-time updates",
    //   image: "/images/task-app.png",
    //   tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    //   github: "#",
    //   demo: "#",
    // },
    {
      title: "RawgHub - Game discovery platform",
      description:
        "Discover over 500.000+ games with sorting/searching/filtering feautres. made with ReactTS, Chakra UI.",
      image: "/rawghub.png",
      tech: ["React", "TypeScript", "Chakra UI", "Axios", "Rawg API"],
      github: "https://github.com/prakharverma057/rawghub",
      demo: "https://rawghub.netlify.app",
    },
    // {
    //   title: "Crypto Portfolio Tracker",
    //   description: "Real-time cryptocurrency portfolio tracking dashboard",
    //   image: "/images/crypto-tracker.png",
    //   tech: ["Vue.js", "CoinGecko API", "Chart.js", "Firebase"],
    //   github: "#",
    //   demo: "#",
    // },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center text-6xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <GitHub size={16} />
                    Code
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
