import { useRef } from "react";
import DemoLayout from "../../components/DemoLayout";
import VariableProximity from "../../components/text-animations/VariableProximity";

function VariableProximityPage() {
  const containerRef = useRef(null);

  return (
    <DemoLayout>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "80vw",
          maxWidth: "900px",
          padding: "60px",
          textAlign: "center",
          color: "#ffffff",
          fontSize: "clamp(32px, 5vw, 72px)",
          lineHeight: 1.2,
        }}
      >
        <VariableProximity
          label="Hover me! And then star React Bits on GitHub, or else..."
          className="variable-proximity-demo"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
    </DemoLayout>
  );
}

export default VariableProximityPage;
