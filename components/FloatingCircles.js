import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingCircles({ count = 30 }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!windowWidth) return null;

  const circles = Array.from({ length: count });

  return circles.map((_, i) => {
    const size = Math.random() * 20 + 10;
    const fromLeft = Math.random() > 0.5;
    const startX = fromLeft ? -size : windowWidth + size;
    const endX = windowWidth / 2 - size / 2;
    const delay = Math.random() * 5;
    const duration = Math.random() * 6 + 4;

    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.3)",
          boxShadow: "0 0 8px 2px rgba(255,255,255,0.3)",
          pointerEvents: "none",
        }}
        initial={{ x: startX, opacity: 0 }}
        animate={{ x: endX, opacity: 0 }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    );
  });
}
