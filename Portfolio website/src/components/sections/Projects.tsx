// // components/sections/Projects.tsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { projects } from "../../constants/projects";

// export default function Projects() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const filters = ["All", "Web", "Mobile", "SaaS", "Open Source"];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((project) => project.tags.includes(activeFilter));

//   return (
//     <section
//       ref={ref}
//       className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
//       id="projects"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           My Projects
//         </motion.h2>

//         <motion.p
//           className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           Here are some of my favorite projects I've worked on
//         </motion.p>

//         <motion.div
//           className="flex flex-wrap justify-center gap-4 mb-16"
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-6 py-2 rounded-full font-medium transition-colors ${
//                 activeFilter === filter
//                   ? "bg-primary text-white"
//                   : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//               whileHover={{ y: -10 }}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 bg-primary/80 text-white text-xs rounded"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-3 mb-4">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
//                     >
//                       Live Demo
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                         />
//                       </svg>
//                     </a>
//                   )}
//                   {project.codeUrl && (
//                     <a
//                       href={project.codeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1"
//                     >
//                       View Code
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//                         />
//                       </svg>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
