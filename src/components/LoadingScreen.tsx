import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import AtomicSpinner from "atomic-spinner";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center"
        >
          <AtomicSpinner
            displayElectronPaths={false}
            electronsPerPath={6}
            electronPathCount={4}
            atomSize={500}
            electronSpeed={0.4}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
