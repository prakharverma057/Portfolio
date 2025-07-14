import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState(false);

  // Fallback if Spline fails to load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) setSplineError(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* 3D Background Element with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {!splineError ? (
          <Spline
            scene="https://prod.spline.design/eVeGpM53TQmRdZag/scene.splinecode"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setSplineError(true);
            }}
            className={`opacity-70 dark:opacity-90 transition-opacity ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900" />
        )}
      </div>

      {/* Loading overlay */}
      {isLoading && !splineError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* ... rest of your hero content ... */}
      </div>
    </section>
  );
}
