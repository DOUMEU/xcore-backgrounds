import Ferrofluid from "../../components/backgrounds/Ferrofluid";

function FerrofluidPage() {
  return (
    <Ferrofluid
      particleCount={1000}
      particleSize={2}
      magneticFieldStrength={1}
      noiseIntensity={0.1}
      colorPalette={["#5227FF", "#FF9FFC", "#7CFF67"]}
    />
  );
}

export default FerrofluidPage;
