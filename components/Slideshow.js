import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slideshow({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides || slides.length === 0) return null;

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            style={styles.image}
          />
        </AnimatePresence>
      </div>

      <div style={styles.buttons}>
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          style={styles.arrowButton}
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((index + 1) % slides.length)}
          style={styles.arrowButton}
        >
          ›
        </button>
      </div>

      <div style={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              background: i === index ? "#333" : "#ccc",
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,182,193,0.4)",
    borderRadius: "16px",
    padding: "16px",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
  },
  imageWrapper: {
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    background: "rgba(255,182,193,0.3)",
  },
  image: {
    width: "100%",
    display: "block",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  arrowButton: {
    background: "none",
    border: "none",
    fontSize: "2rem",
    color: "gold",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "4px 12px",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    marginTop: "12px",
    gap: "6px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};
