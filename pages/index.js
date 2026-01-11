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
    <div style={styles.page}>
      <h1 style={styles.title}>Sandy’s Debut ✨</h1>

      <div style={styles.card}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            style={styles.image}
          />
        </AnimatePresence>

        <div style={styles.buttons}>
          <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
            Previous
          </button>
          <button onClick={() => setIndex((index + 1) % slides.length)}>
            Next
          </button>
        </div>
      </div>

      <div style={styles.card}>
        <h2>RSVP 💌</h2>
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
    background: "linear-gradient(#fde2e4, #e4c1f9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
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

