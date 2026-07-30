import { useRef } from "react";
import ScrollVelocity from "../../components/text-animations/ScrollVelocity";

function ScrollVelocityPage() {
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
          minHeight: "250vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <ScrollVelocity
            scrollContainerRef={scrollContainerRef}
            texts={["React Bits", "Scroll Down"]}
            velocity={80}
            className="custom-scroll-text"
            numCopies={6}
            damping={50}
            stiffness={400}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollVelocityPage;
