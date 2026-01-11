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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-pink-200 via-rose-300 to-red-400 overflow-hidden px-4 py-10">
      
      {/* Gold hearts from sides */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 rounded-full bg-yellow-300 opacity-50"
          style={{
            top: `${20 + i * 12}%`,
            left: i % 2 === 0 ? "-20px" : "100%",
          }}
          animate={{
            x: i % 2 === 0 ? [0, 900] : [0, -900],
            y: [0, 10, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
            ease: "linear",
            delay: i,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-5xl text-yellow-300 font-[Brush_Script_MT] text-center mb-10 drop-shadow-lg">
        Sandy’s Debut ✨
      </h1>

      {/* Slideshow */}
      <div className="relative w-full max-w-md mb-8 flex justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-red-300/50 shadow-xl flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index].image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-xl border border-red-200/40 shadow-lg object-contain"
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
