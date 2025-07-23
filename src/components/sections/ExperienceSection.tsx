import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../constants/experiences";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className={`flex items-center mb-8 
                  ${index % 2 === 0 ? "" : "flex-row-reverse"}
                `}
            >
              <div className="flex-1">
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
