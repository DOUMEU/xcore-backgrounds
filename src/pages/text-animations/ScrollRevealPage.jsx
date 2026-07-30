import { useRef } from "react";
import ScrollReveal from "../../components/text-animations/ScrollReveal";

function ScrollRevealPage() {
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        overflowY: "auto",
        overflowX: "hidden",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          minHeight: "240vh",
          paddingTop: "110vh",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a
          disease? No! When he ate a soup made out of a poisonous mushroom? No!
          A man dies when he is forgotten!
        </ScrollReveal>
      </div>
    </div>
  );
}

export default ScrollRevealPage;
