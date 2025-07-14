import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function LoadingScreen() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
      },
    },
  };

  //   const dotVariants = {
  //     hidden: { y: 0 },
  //     visible: {
  //       y: [0, -15, 0],
  //       transition: {
  //         duration: 1.5,
  //         repeat: Infinity,
  //         ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
  //       },
  //     },
  //     exit: {
  //       y: 0,
  //       opacity: 0,
  //     },
  //   };

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } z-50`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
            Your
          </span>
          <span className="text-primary">Name</span>
        </motion.div>

        {/* Animated dots */}
        <div className="flex space-x-4">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`w-4 h-4 rounded-full ${
                theme === "dark" ? "bg-gray-300" : "bg-gray-600"
              }`}
              custom={index}
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          className={`mt-8 text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
