import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { technologies, categories } from "../../constants/skills";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
          viewport={{ once: false, amount: 0.3 }}
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

        {/* Technologies Grid*/}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-16"
        >
          <AnimatePresence>
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.1 },
                }}
                onHoverStart={() => {
                  setHoveredSkill(tech.name);
                }}
                onHoverEnd={() => {
                  setHoveredSkill(null);
                }}
                className="relative group cursor-pointer"
              >
                <div
                  className={`
                    relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                    hover:shadow-2xl transition-all duration-300 border border-gray-200 
                    dark:border-gray-700
                  `}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredSkill === tech.name ? 0.1 : 0,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-2xl`}
                  />

                  <div className=" flex flex-col justify-center justify-items-center relative z-10 text-center">
                    {/* logo */}
                    <img
                      src={tech.logo}
                      className="mb-3 transform group-hover:scale-110 transition-transform duration-300 w-22 h-22 m-auto"
                    />

                    {/* Tech name */}
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-sm">
                      {tech.name}
                    </h3>

                    {/* Category badge */}
                    <span
                      className={`
                        inline-block z-10 px-2 py-1 text-xs rounded-full 
                        bg-gradient-to-r ${tech.color} text-white opacity-80
                      `}
                    >
                      {tech.category}
                    </span>
                  </div>
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
            I'm a full stack developer in making; currently im looking for
            opportunities to gather experience in front-end and intrapreneurship
            domain. I'm passionate for building a brand where im one of the
            founding members!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
