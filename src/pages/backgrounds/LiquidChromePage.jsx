import LiquidChrome from "../../components/backgrounds/LiquidChrome";

function LiquidChromePage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.3}
        amplitude={0.3}
        interactive
      />
    </div>
  );
}

export default LiquidChromePage;
