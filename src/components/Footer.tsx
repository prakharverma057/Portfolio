("use client");

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { MdMail as Mail } from "react-icons/md";

interface Footer {
  backgroundColor?: string;
  dotColor?: string;
  gridSpacing?: number;
  animationSpeed?: number;
  removeWaveLine?: boolean;
}

const Footer = ({
  backgroundColor = "#101828",
  dotColor = "#666666",
  gridSpacing = 30,
  animationSpeed = 0.005,
  removeWaveLine = true,
}: Footer) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const ripples = useRef<
    Array<{ x: number; y: number; time: number; intensity: number }>
  >([]);
  const dotsRef = useRef<
    Array<{
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      phase: number;
    }>
  >([]);
  const dprRef = useRef<number>(1);

  const getMouseInfluence = (x: number, y: number): number => {
    const dx = x - mouseRef.current.x;
    const dy = y - mouseRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;
    return Math.max(0, 1 - distance / maxDistance);
  };

  const getRippleInfluence = (
    x: number,
    y: number,
    currentTime: number
  ): number => {
    let totalInfluence = 0;
    ripples.current.forEach((ripple) => {
      const age = currentTime - ripple.time;
      const maxAge = 3000;
      if (age < maxAge) {
        const dx = x - ripple.x;
        const dy = y - ripple.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const rippleRadius = (age / maxAge) * 300;
        const rippleWidth = 60;
        if (Math.abs(distance - rippleRadius) < rippleWidth) {
          const rippleStrength = (1 - age / maxAge) * ripple.intensity;
          const proximityToRipple =
            1 - Math.abs(distance - rippleRadius) / rippleWidth;
          totalInfluence += rippleStrength * proximityToRipple;
        }
      }
    });
    return Math.min(totalInfluence, 2);
  };

  const initializeDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use CSS pixel dimensions for calculations
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    const dots: Array<{
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      phase: number;
    }> = [];

    // Create grid of dots
    for (let x = gridSpacing / 2; x < canvasWidth; x += gridSpacing) {
      for (let y = gridSpacing / 2; y < canvasHeight; y += gridSpacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          phase: Math.random() * Math.PI * 2, // Random phase for subtle animation
        });
      }
    }

    dotsRef.current = dots;
  }, [gridSpacing]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Set the actual size in memory (scaled up for high DPI)
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;

    // Scale the canvas back down using CSS
    canvas.style.width = displayWidth + "px";
    canvas.style.height = displayHeight + "px";

    // Scale the drawing context so everything draws at the correct size
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initializeDots();
  }, [initializeDots]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    mouseRef.current.isDown = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripples.current.push({
      x,
      y,
      time: Date.now(),
      intensity: 2,
    });

    const now = Date.now();
    ripples.current = ripples.current.filter(
      (ripple) => now - ripple.time < 3000
    );
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    timeRef.current += animationSpeed;
    const currentTime = Date.now();

    // Use CSS pixel dimensions for calculations
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // Clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Update and draw dots
    dotsRef.current.forEach((dot) => {
      const mouseInfluence = getMouseInfluence(dot.originalX, dot.originalY);
      const rippleInfluence = getRippleInfluence(
        dot.originalX,
        dot.originalY,
        currentTime
      );
      const totalInfluence = mouseInfluence + rippleInfluence;

      // Keep dots at original positions - no movement
      dot.x = dot.originalX;
      dot.y = dot.originalY;

      // Calculate dot properties based on influences - only scaling
      const baseDotSize = 2;
      const dotSize =
        baseDotSize +
        totalInfluence * 6 +
        Math.sin(timeRef.current + dot.phase) * 0.5;
      const opacity = Math.max(
        0.3,
        0.6 +
          totalInfluence * 0.4 +
          Math.abs(Math.sin(timeRef.current * 0.5 + dot.phase)) * 0.1
      );

      // Draw dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);

      // Color with opacity
      const red = Number.parseInt(dotColor.slice(1, 3), 16);
      const green = Number.parseInt(dotColor.slice(3, 5), 16);
      const blue = Number.parseInt(dotColor.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
      ctx.fill();
    });

    // Draw ripple effects
    if (!removeWaveLine) {
      ripples.current.forEach((ripple) => {
        const age = currentTime - ripple.time;
        const maxAge = 3000;
        if (age < maxAge) {
          const progress = age / maxAge;
          const radius = progress * 300;
          const alpha = (1 - progress) * 0.3 * ripple.intensity;

          // Outer ripple
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.arc(ripple.x, ripple.y, radius, 0, 2 * Math.PI);
          ctx.stroke();

          // Inner ripple
          const innerRadius = progress * 150;
          const innerAlpha = (1 - progress) * 0.2 * ripple.intensity;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 120, 120, ${innerAlpha})`;
          ctx.lineWidth = 1;
          ctx.arc(ripple.x, ripple.y, innerRadius, 0, 2 * Math.PI);
          ctx.stroke();
        }
      });
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [backgroundColor, dotColor, removeWaveLine, animationSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    const handleResize = () => resizeCanvas();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      ripples.current = [];
      dotsRef.current = [];
    };
  }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp]);

  return (
    <section className="w-full h-full relative ">
      <div
        className=" -z-1 inset-0 w-full h-96 overflow-hidden"
        style={{ backgroundColor }}
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      <div className=" pointer-events-none absolute w-xl h-32  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <p className=" absolute text-nowrap tracking-widest text-gray-400 font-bold text-3xl top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12">
            Aspire. Explore. Build.
          </p>
        </div>
      </div>

      <div className="border-t p-5 bg-gray-900 border-gray-800  text-center flex flex-row justify-between align-middle">
        <p className="text-gray-400">
          Great things emerge from great observations made within self.
        </p>
        <div className="flex space-x-4 right-0">
          <motion.a
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            href="https://github.com/prakharverma057"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            href="https://linkedin.com/in/prakharverma057"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            href="mailto:prakharverma.work@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
