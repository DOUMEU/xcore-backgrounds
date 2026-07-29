import SplitText from "../../components/text-animations/SplitText";

function SplitTextPage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontSize: "80px",
        fontWeight: 600,
        textAlign: "center",
        pointerEvents: "none",
      }}
    >
      <SplitText
        text="Hello, you!"
        delay={60}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}

export default SplitTextPage;