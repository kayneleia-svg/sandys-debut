{/* Floating Gold Hearts - Top */}
<div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={`top-${i}`}
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "gold",
        opacity: 0.4,
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 50}px`,
      }}
      animate={{
        y: ["0px", "-800px"], // floats upward
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

  {/* Bottom floating hearts */}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={`bottom-${i}`}
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "gold",
        opacity: 0.4,
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 50}px`,
      }}
      animate={{
        y: ["0px", "800px"], // floats downward
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
</div>
