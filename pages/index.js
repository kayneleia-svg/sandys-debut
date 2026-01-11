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

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <div style={{ ...styles.page, position: "relative", overflow: "hidden" }}>
      
      {/* Floating Gold Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "gold",
            opacity: 0.4,
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 50}px`,
            pointerEvents: "none",
          }}
          animate={{
            y: ["0px", "-800px"],
            x: [`0px`, `${Math.random() * 20 - 10}px`],
            opacity: [0.4, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: Math.random() * 10 + 7,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Title */}
      <h1 style={{ ...styles.title, fontFamily: "'Brush Script MT', cursive", color: "white", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
        Sandy’s Debut ✨
      </h1>

      {/* Slideshow */}
      <div style={styles.card}>
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
            style={styles.image}
          />
        </AnimatePresence>

        <div style={styles.buttons}>
          <button onClick={() => paginate(-1)}>Previous</button>
          <button onClick={() => paginate(1)}>Next</button>
        </div>
      </div>

      {/* RSVP */}
      <div style={styles.card}>
        <h2 style={{ fontFamily: "'Brush Script MT', cursive", color: "#d6336c", textAlign: "center", fontSize: "1.8rem", marginBottom: "10px" }}>
          RSVP 💌
        </h2>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Please confirm your attendance by filling out the form below 💌
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScSlAcpKucFkVD0UwEpCLq47ImbyF2pEpynKGn1vekvG6mAiA/viewform"
          width="100%"
          height="500"
          style={{ borderRadius: "12px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #fde2e4, #f9c1c1, #f28c8c)", // soft pink → red
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "16px",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    position: "relative",
    zIndex: 1,
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },
};
