import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const slides = [
    { image: "/image1.png" },
    { image: "/image2.png" },
    { image: "/image3.png" },
    { image: "/image4.png" },
  ];

  const [[index, direction], setIndex] = useState([0, 0]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-red-300 to-red-400 flex flex-col items-center justify-center p-6">
      
      {/* Title */}
      <h1
        style={{ fontFamily: "'Brush Script MT', cursive" }}
        className="text-4xl mb-6 text-white drop-shadow-lg"
      >
        Sandy’s Debut
      </h1>

      {/* Slideshow */}
      <div className="max-w-md w-full rounded-2xl shadow-xl mb-6 bg-white p-6 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="w-full rounded-xl"
          />
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
            onClick={() => paginate(-1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={() => paginate(1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* RSVP */}
      <div className="max-w-md w-full rounded-2xl shadow-xl bg-white p-4">
        <h2
          style={{ fontFamily: "'Brush Script MT', cursive" }}
          className="text-3xl text-center mb-3 text-pink-600"
        >
          RSVP
        </h2>
        <p className="text-sm text-center mb-4">
          Please confirm your attendance by filling out the form below 💌
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScSlAcpKucFkVD0UwEpCLq47ImbyF2pEpynKGn1vekvG6mAiA/viewform"
          width="100%"
          height="500"
          className="rounded-xl border"
        />
      </div>
    </div>
  );
}
