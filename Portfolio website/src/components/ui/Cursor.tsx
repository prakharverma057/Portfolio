import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 1024) return;

    const cursor = document.querySelector(".cursor") as HTMLElement;
    const follower = document.querySelector(".cursor-follower") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      gsap.to(cursor, { scale: 0.7, duration: 0.1 });
      gsap.to(follower, { scale: 1.3, duration: 0.1 });
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      gsap.to(cursor, { scale: 1, duration: 0.1 });
      gsap.to(follower, { scale: 1, duration: 0.1 });
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
        gsap.to(follower, { scale: 3, opacity: 0.2, duration: 0.2 });
      } else {
        setIsHovering(false);
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(follower, { scale: 1, opacity: 0.6, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleLinkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleLinkHover);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor fixed w-4 h-4 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference ${
          isHovering ? "bg-white" : "bg-primary"
        } ${
          isClicking ? "scale-75" : "scale-100"
        } transition-transform duration-100 hidden lg:block`}
      />
      <div
        className={`cursor-follower fixed w-8 h-8 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 opacity-60 ${
          isClicking ? "scale-130" : "scale-100"
        } transition-transform duration-100 hidden lg:block`}
      />
    </>
  );
}
