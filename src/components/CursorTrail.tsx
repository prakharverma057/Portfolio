import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState as reactUseState } from "react";

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (e: MouseEventWithClient) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

export default CursorTrail;
function useState<T>(initialValue: T): [T, (value: T) => void] {
  const [state, setState] = reactUseState(initialValue);
  return [state, setState];
}
