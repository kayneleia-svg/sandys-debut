import Slideshow from "../components/Slideshow";
import FloatingCircles from "../components/FloatingCircles";

export default function Home() {
  // Slide images in the public folder
  const slides = [
    { image: "/image1.png" },
    { image: "/image2.png" },
    { image: "/image3.png" },
    { image: "/image4.png" },
  ];

  return (
    <div style={styles.page}>
      {/* Floating circles on the sides */}
      <FloatingCircles count={30} />

      {/* Title */}
      <h1 style={styles.title}>You're invited to...</h1>

      {/* Slideshow */}
      <Slideshow slides={slides} />

      {/* RSVP section */}
      <div style={styles.card}>
        <h2 style={styles.rsvpTitle}>RSVP</h2>
        <iframe
          src="https://forms.gle/DztA7kx3Fqcc74fw6"
          width="100%"
          height="500"
          style={{
            borderRadius: "12px",
            background: "rgba(255,182,193,0.4)",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #fde2e4, #8b0000)", // soft pink → bold red
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
    color: "#ffffff", // white
    letterSpacing: "0.5em",
    textAlign: "center",
    zIndex: 1,
  },
  rsvpTitle: {
    fontFamily: '"Brush Script MT", cursive',
    fontWeight: "bold",
    color: "#ffffff", // white
    letterSpacing: "0.5em",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "12px",
  },
  card: {
    background: "rgba(255,182,193,0.4)", // transparent pink
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
};
