import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const slides = [
    { image: "/image1.png" },
    { image: "/image2.png" },
    { image: "/image3.png" },
    { image: "/image4.png" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Random rotation for shuffled feel
  const getRotation = () => {
    return Math.random() * 8 - 4; // -4° to 4°
  };

  const variants = {
    enter: { opacity: 0, scale: 0.95, rotate: getRotation() },
    center: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.95, rotate: getRotation() },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-pink-200 via-rose-300 to-red-400 overflow-hidden px-4 py-10">
      
      {/* Background Music */}
      <iframe
        src="https://www.youtube.com/embed/FgHCAMRGvt0?autoplay=1&loop=1&playlist=FgHCAMRGvt0"
        title="Background Music"
        className="absolute w-0 h-0"
        allow="autoplay"
      ></iframe>

      {/* Gold hearts from sides */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 rounded-full bg-yellow-300 opacity-50"
          style={{
            top: `${Math.random() * 80}%`,
            left: i % 2 === 0 ? "-20px" : "100%",
          }}
          animate={{
            x: i % 2 === 0 ? [0, 900] : [0, -900],
            y: [`0px`, `${Math.random() * 20 - 10}px`],
            opacity: [0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.random() * 12 + 8,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-5xl text-yellow-300 font-[Brush_Script_MT] text-center mb-10 drop-shadow-lg">
        Sandy’s Debut ✨
      </h1>

      {/* Slideshow */}
      <div className="relative w-full max-w-md mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-red-300/50 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index].image}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className="w-full rounded-xl border border-red-200/40 shadow-lg"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* RSVP Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-red-300/50 shadow-xl">
        <h2 className="text-4xl text-yellow-300 font-[Brush_Script_MT] text-center mb-4 drop-shadow-lg">
          RSVP 💌
        </h2>
        <p className="text-center mb-4">
          Please confirm your attendance by filling out the form below 💌
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScSlAcpKucFkVD0UwEpCLq47ImbyF2pEpynKGn1vekvG6mAiA/viewform"
          width="100%"
          height="500"
          className="rounded-xl border border-red-200/30 shadow-md"
        />
      </div>
    </div>
  );
}
