import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Physics Teacher",
      company: "JEE Academy.",
      period: "2022",
      description:
        "Taught Phyiscs concepts for kids of intermediate school to prepare them for JEE",
    },
    {
      title: "Physics Tutor",
      company: "Amulya Institute",
      period: "2022",
      description:
        "Built curriculum to gather interest of highschool students in physics and turn them passionate for learnign.",
    },
    {
      title: "Executive Marketing Lead",
      company: "TBA- The Badnaam Adda",
      period: "2023",
      description:
        "HoReCa | Developed marketing leads and promotional relationship with different companies and colleges.",
    },
    {
      title: "Founding Operations Member",
      company: "The Hoomies",
      period: "2023",
      description:
        "Built connections, overloked operations and multiple departments and delt with public interactions",
    },
    {
      title: "Event Management",
      company: "Phaze Experience",
      period: "2023",
      description:
        "Did extensive work during India's first MotoGP event with over 150.000+ audience. Led A team and functional across multiple focus teams.",
    },
    {
      title: "Event Management",
      company: "JSS Incubator",
      period: "2024",
      description:
        "Led a team of 30+ members to manage a professional event end-to-end",
    },
    {
      title: "Fest Management",
      company: "JSS Incubator",
      period: "2025",
      description:
        "Managed sponsorships, security and on ground opertions during large scale university fest",
    },
    {
      title: "Core Team Cooridnator",
      company: "JSS E-Cell",
      period: "2025",
      description:
        "Leading Team of 80+ members, embarking entreprenurship journey in each. Collaborated with various companies like Microsoft, GFG, Monster energy, Smaaash, Glued  etc. ",
    },
  ];

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
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
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
