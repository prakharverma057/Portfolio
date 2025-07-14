import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp",
    duration: "2022 - Present",
    description: [
      "Led migration from legacy AngularJS to React, improving performance by 40%",
      "Implemented design system used across 15+ products",
      "Mentored 3 junior developers",
    ],
    skills: ["React", "TypeScript", "GraphQL"],
  },
  // Add other experiences...
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 -ml-2 w-4 h-4 rounded-full bg-primary z-10"></div>

              {/* Timeline line (except last item) */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-10 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              )}

              <div className="ml-8 pl-6 pb-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {exp.role}
                    </h3>
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-primary mb-4">
                    {exp.company}
                  </h4>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="inline-block w-1.5 h-1.5 mt-2 mr-2 bg-gray-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
