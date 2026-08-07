import ColorBends from "../../components/backgrounds/ColorBends";

function ColorBendsPage() {
  return (
    <ColorBends
      rotation={90}
      speed={0.2}
      colors={["#5227FF", "#FF9FFC", "#7CFF67"]}
      transparent={false}
      autoRotate={0}
      scale={1}
      frequency={1}
      warpStrength={1}
      mouseInfluence={1}
      parallax={0.5}
      noise={0.15}
      iterations={1}
      intensity={1.5}
      bandWidth={6}
    />
  );
}

export default ColorBendsPage;
