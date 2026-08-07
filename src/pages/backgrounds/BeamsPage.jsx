import Beams from "../../components/backgrounds/Beams";

function BeamsPage() {
  return (
    <Beams
      speed={2}
      noiseIntensity={1.75}
      scale={0.2}
      beamNumber={12}
      beamWidth={2}
      beamHeight={15}
      lightColor="#ffffff"
      rotation={0}
    />
  );
}

export default BeamsPage;
