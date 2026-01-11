// inside styles object
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f9dada, #f28c8c)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontFamily: "'Brush Script MT', cursive",
    color: "gold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  rsvpTitle: {
    fontSize: "2rem",
    fontFamily: "'Brush Script MT', cursive",
    color: "gold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    textAlign: "center",
    marginBottom: "12px",
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "16px",
    width: "100%",
    maxWidth: "400px", // <-- changed from 450px
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid rgba(255,0,0,0.2)",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "12px",
  },
};
