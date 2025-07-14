// components/sections/About.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    year: "2015",
    title: "Started Coding",
    description:
      "Began learning web development with HTML, CSS, and JavaScript",
  },
  {
    year: "2017",
    title: "First Freelance Project",
    description: "Built a website for a local business",
  },
  {
    year: "2019",
    title: "Computer Science Degree",
    description: "Graduated with a BS in Computer Science",
  },
  {
    year: "2020",
    title: "First Startup",
    description: "Co-founded a SaaS company that grew to 10,000 users",
  },
  {
    year: "2022",
    title: "Full-time Developer",
    description: "Working as a senior frontend developer at a tech company",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="sticky top-24">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate web developer with a strong entrepreneurial
              mindset. I love building products that solve real problems while
              maintaining beautiful, intuitive interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding, you can find me reading about business,
              hiking in nature, or working on my next side project.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "GraphQL",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            My Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16 pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold mt-1 mb-2 text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
