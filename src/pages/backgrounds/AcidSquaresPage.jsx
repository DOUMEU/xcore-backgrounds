import AcidSquares from "../../components/backgrounds/AcidSquares";

function AcidSquaresPage() {
  return (
    <AcidSquares
      color1="#5227FF"
      color2="#FF9FFC"
      color3="#7CFF67"
      detail="medium"
      speed={0.7}
      waveDepth={1}
      zoom={1.3}
      density={10}
      glow={1}
      exposure={2700}
      spread={0.3}
      stepSize={0.001}
      colorShift={0}
      contrast={1}
      brightness={1}
      opacity={1}
      mouseInteraction
      mouseStrength={0.1}
      mouseRadius={0.35}
      blur={0}
      grain
      grainIntensity={0.05}
    />
  );
}

export default AcidSquaresPage;
