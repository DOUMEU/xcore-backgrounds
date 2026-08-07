import GradientBlinds from "../../components/backgrounds/GradientBlinds";

function GradientBlindsPage() {
  return (
    <GradientBlinds
      gradientColors={["#FF9FFC", "#5227FF"]}
      angle={20}
      noise={0.5}
      blindCount={16}
      blindMinWidth={60}
      spotlightRadius={0.5}
      spotlightSoftness={1}
      spotlightOpacity={1}
      mouseDampening={0.15}
      distortAmount={0}
      shineDirection="left"
      mixBlendMode="lighten"
      color1="#FF9FFC"
      color2="#5227FF"
    />
  );
}

export default GradientBlindsPage;
