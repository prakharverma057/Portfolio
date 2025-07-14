import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Zap, Rocket, Code, Briefcase } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
// import { fadeInUp } from "../utils/animations";

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const stats = [
//     { label: "Projects Completed", value: "50+", icon: Trophy },
//     { label: "Years Experience", value: "5+", icon: Star },
//     { label: "Happy Clients", value: "30+", icon: Zap },
//     { label: "Startups Founded", value: "3", icon: Rocket },
//   ];

//   return (
//     <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
//               <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 h-80 flex items-center justify-center">
//                 <div className="text-6xl">👨‍💻</div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//               I'm a passionate web developer with a keen interest in
//               entrepreneurship. My journey began with a simple curiosity about
//               how websites work, and it has evolved into a deep expertise in
//               creating digital solutions that make a difference.
//             </p>

//             <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//               Beyond coding, I'm an entrepreneur at heart. I believe in the
//               power of technology to solve real-world problems and create
//               meaningful impact. I've founded several startups and continue to
//               explore new opportunities in the digital space.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mt-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                   className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                 >
//                   <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
//                   <div className="text-2xl font-bold text-gray-800 dark:text-white">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-600 dark:text-gray-300">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Trophy },
    { label: "Years Experience", value: "5+", icon: Star },
    { label: "Happy Clients", value: "30+", icon: Zap },
    { label: "Startups Founded", value: "3", icon: Rocket },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30"></div>
              <div className="relative">
                <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
                  <img
                    src="./profile-2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full z-10 flex items-center justify-center text-white">
                  <Code size={28} />
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full z-10 flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate web developer with a keen interest in
              entrepreneurship. My journey began with a simple curiosity about
              how technologies work, and it has taken me to explore varoious
              tech at early age of teens. It evolved into me pursuing a carreer
              in creating digital solutions that make a difference in lives...
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm an entrepreneur at heart. I believe in the
              power of technology to solve real-world problems and create
              values. I've founded several startups and continue to explore new
              opportunities. Its my ambition to be a future leader.
            </p>

            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
