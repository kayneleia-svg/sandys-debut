import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================== SLIDESHOW COMPONENT ==================
function Slideshow({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides || slides.length === 0) return null;

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      setIndex((index + 1) % slides.length);
    } else if (offset > 100 || velocity > 500) {
      setIndex((index - 1 + slides.length) % slides.length);
    }
  };

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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          />
        </AnimatePresence>
      </div>

      {/* Arrows below the image */}
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

      {/* Slide Dots */}
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

// ================== TRANSPARENT WHITE SIDES TO CENTER ==================
function FloatingCircles({ count = 30 }) {
  const circles = Array.from({ length: count });

  return circles.map((_, i) => {
    const size = Math.random() * 20 + 10; // 10px to 30px
    const fromLeft = Math.random() > 0.5; // decide left or right start
    const startX = fromLeft ? -size : window.innerWidth + size; // offscreen
    const endX = window.innerWidth / 2 - size / 2; // middle of the screen
    const delay = Math.random() * 5;
    const duration = Math.random() * 6 + 4; // speed variation

    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`, // random vertical position
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

// ================== MAIN PAGE ==================
export default function Home() {
  const slides = [
    { image: "/image1.png" },
    { image: "/image2.png" },
    { image: "/image3.png" },
    { image: "/image4.png" },
  ];

  return (
    <div style={styles.page}>
      <FloatingCircles count={30} />
      <h1 style={styles.title}>You're invited to...</h1>

      <Slideshow slides={slides} />

      <div style={styles.card}>
        <h2 style={styles.rsvpTitle}>RSVP</h2>
        <iframe
          src="https://forms.gle/DztA7kx3Fqcc74fw6"
          width="100%"
          height="500"
          style={{ borderRadius: "12px", background: "rgba(255,182,193,0.4)" }}
        />
      </div>
    </div>
  );
}

// ================== STYLES ==================
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #fde2e4, #8b0000)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontFamily: '"Brush Script MT", cursive',
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "0.5em",
    textAlign: "center",
    zIndex: 1,
  },
  rsvpTitle: {
    fontFamily: '"Brush Script MT", cursive',
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "0.5em",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "12px",
  },
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
    cursor: "grab",
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
    userSelect: "none",
    transition: "transform 0.2s",
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
