import { useRef } from "react";
import ScrollFloat from "../../components/text-animations/ScrollFloat";

function ScrollFloatPage() {
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
          minHeight: "220vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollFloat
          scrollContainerRef={scrollContainerRef}
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Scroll Float
        </ScrollFloat>
      </div>
    </div>
  );
}

export default ScrollFloatPage;
