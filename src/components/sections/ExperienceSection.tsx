import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../const/experiences";

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

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block max-w-4xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform -translate-x-1/2 rounded-full shadow-lg"></div>
          
          {experiences.slice().reverse().map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              {/* Experience Card */}
              <div className="flex-1">
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  } border-l-4 ${index % 2 === 0 ? 'border-blue-600' : 'border-purple-600'}`}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Timeline Circle with pulse effect */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative z-10"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg relative">
                  {/* Pulse rings */}
                  <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-ping"></div>
                  <div className="absolute -inset-1 bg-purple-600/30 rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden max-w-md mx-auto relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full"></div>
          
          {experiences.slice().reverse().map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Mobile Timeline Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative z-10 mt-2"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-3 border-white dark:border-gray-900 shadow-md">
                  <div className="absolute -inset-1 bg-blue-600/20 rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              {/* Mobile Card */}
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;