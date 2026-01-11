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

      <div style={styles.buttons}>
        <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
          Previous
        </button>
        <button onClick={() => setIndex((index + 1) % slides.length)}>Next</button>
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

// ================== GOLD HEARTS COMPONENT ==================
function FloatingHearts({ count = 20 }) {
  const hearts = Array.from({ length: count });

  return hearts.map((_, i) => {
    const size = Math.random() * 24 + 12; // 12px to 36px
    const left = Math.random() * 100; // % from left
    const delay = Math.random() * 5; // seconds
    const duration = Math.random() * 10 + 8; // seconds

    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          left: `${left}%`,
          fontSize: size,
          color: "gold",
          pointerEvents: "none",
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -1500, opacity: 1 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          delay: delay,
          ease: "linear",
        }}
      >
        ❤️
      </motion.div>
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
      <FloatingHearts count={25} /> {/* Gold hearts floating */}
      <h1 style={styles.title}>You're invited to...</h1>

      <Slideshow slides={slides} />

      <div style={styles.card}>
        <h2 style={styles.rsvpTitle}>RSVP</h2>
        <iframe
          src="https://forms.gle/vim823duYf3UiqPHA"
          width="100%"
          height="500"
          style={{ borderRadius: "12px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
}

// ================== STYLES ==================
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(#fde2e4, #e4c1f9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    position: "relative", // for floating hearts
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontFamily: '"Brush Script MT", cursive',
    color: "gold",
    textAlign: "center",
    zIndex: 1,
  },
  rsvpTitle: {
    fontFamily: '"Brush Script MT", cursive',
    color: "gold",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "12px",
  },
  card: {
    background: "#fff",
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
