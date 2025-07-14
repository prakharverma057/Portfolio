import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technologies = [
    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
      color: "from-pink-400 to-pink-600",
      description: "Component-based UI library",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "▲",
      color: "from-blue-500 to-blue-700",
      description: "Full-stack React framework",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: "TS",
      color: "from-blue-500 to-blue-700",
      description: "Typed JavaScript",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "🎨",
      color: "from-cyan-400 to-cyan-600",
      description: "Utility-first CSS framework",
    },
    // {
    //   name: "Vue.js",
    //   category: "Frontend",
    //   icon: "🖖",
    //   color: "from-green-400 to-green-600",
    //   description: "Progressive JavaScript framework",
    // },
    // {
    //   name: "Sass",
    //   category: "Frontend",
    //   icon: "💎",
    //   color: "from-pink-400 to-pink-600",
    //   description: "CSS preprocessor",
    // },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      icon: "🟢",
      color: "from-green-500 to-green-700",
      description: "JavaScript runtime",
    },
    {
      name: "Python",
      category: "Backend",
      icon: "🐍",
      color: "from-green-400 to-blue-500",
      description: "Versatile programming language",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: "🚀",
      color: "from-blue-600 to-red-800",
      description: "Fast Node.js web framework",
    },
    // {
    //   name: "Django",
    //   category: "Backend",
    //   icon: "🎯",
    //   color: "from-green-600 to-green-800",
    //   description: "Python web framework",
    // },
    // {
    //   name: "GraphQL",
    //   category: "Backend",
    //   icon: "🔗",
    //   color: "from-pink-500 to-purple-600",
    //   description: "Query language for APIs",
    // },
    {
      name: "REST API",
      category: "Backend",
      icon: "🌐",
      color: "from-cyan-400 to-blue-600",
      description: "RESTful web services",
    },

    // Database
    {
      name: "MongoDB",
      category: "Database",
      icon: "🍃",
      color: "from-green-500 to-green-700",
      description: "NoSQL database",
    },
    // {
    //   name: "PostgreSQL",
    //   category: "Database",
    //   icon: "🐘",
    //   color: "from-blue-600 to-blue-800",
    //   description: "Relational database",
    // },
    // {
    //   name: "Redis",
    //   category: "Database",
    //   icon: "📦",
    //   color: "from-red-500 to-red-700",
    //   description: "In-memory data store",
    // },
    // {
    //   name: "Firebase",
    //   category: "Database",
    //   icon: "🔥",
    //   color: "from-yellow-400 to-orange-500",
    //   description: "Google cloud platform",
    // },

    // DevOps & Tools
    // {
    //   name: "Docker",
    //   category: "DevOps",
    //   icon: "🐳",
    //   color: "from-blue-400 to-blue-600",
    //   description: "Containerization platform",
    // },
    // {
    //   name: "AWS",
    //   category: "DevOps",
    //   icon: "☁️",
    //   color: "from-orange-400 to-yellow-500",
    //   description: "Cloud computing services",
    // },
    // {
    //   name: "Git",
    //   category: "DevOps",
    //   icon: "📚",
    //   color: "from-orange-500 to-red-500",
    //   description: "Version control system",
    // },
    // {
    //   name: "Kubernetes",
    //   category: "DevOps",
    //   icon: "⚓",
    //   color: "from-blue-600 to-purple-600",
    //   description: "Container orchestration",
    // },
    {
      name: "GSAP",
      category: "Design",
      icon: "🦸",
      color: "from-blue-400 to-yellow-500",
      description: "Animation and micro-interaction library",
    },
    {
      name: "Canva",
      category: "Design",
      icon: "✨",
      color: "from-yellow-600 to-orange-600",
      description: "Design and templating",
    },
    {
      name: "Framer Motion",
      category: "Design",
      icon: "🎞️",
      color: "from-purple-600 to-blue-600",
      description: "Animation library",
    },
    // soft skills
    {
      name: "Public Speaking",
      category: "soft skills",
      icon: "🎤",
      color: "from-purple-600 to-blue-600",
      description: "effective storytelling and communication",
    },
    {
      name: "Problem Solving",
      category: "soft skills",
      icon: "🧩",
      color: "from-green-500 to-green-500",
      description: "Analytical and critical thinking",
    },
    {
      name: "Teamwork",
      category: "soft skills",
      icon: "🤝",
      color: "from-yellow-400 to-orange-500",
      description: "Collaboration and Leadership",
    },
    {
      name: "Event Management",
      category: "soft skills",
      icon: "⏳",
      color: "from-blue-400 to-cyan-500",
      description: "On-ground activity, prioritization and organization",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    //"DevOps",
    "Design",
    "soft skills",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technologies & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          <AnimatePresence>
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredSkill(tech.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`
                    relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                    hover:shadow-2xl transition-all duration-300 border border-gray-200 
                    dark:border-gray-700 overflow-hidden
                  `}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredSkill === tech.name ? 0.1 : 0,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color}`}
                  />

                  {/* Icon */}
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>

                    {/* Tech name */}
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-sm">
                      {tech.name}
                    </h3>

                    {/* Category badge */}
                    <span
                      className={`
                        inline-block px-2 py-1 text-xs rounded-full 
                        bg-gradient-to-r ${tech.color} text-white opacity-80
                      `}
                    >
                      {tech.category}
                    </span>
                  </div>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {hoveredSkill === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-20 shadow-lg"
                      >
                        {tech.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With expertise spanning across modern web technologies, I create
            full-stack solutions that are scalable, performant, and
            user-centric. Always learning and adapting to the latest industry
            trends and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
