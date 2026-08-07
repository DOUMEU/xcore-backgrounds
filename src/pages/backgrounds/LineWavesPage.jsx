import LineWaves from "../../components/backgrounds/LineWaves";

function LineWavesPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="#ffffff"
        color2="#ffffff"
        color3="#ffffff"
        enableMouseInteraction
        mouseInfluence={2}
      />
    </div>
  );
}

export default LineWavesPage;
