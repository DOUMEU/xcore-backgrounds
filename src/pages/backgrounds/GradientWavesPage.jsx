import GradientWaves from "../../components/backgrounds/GradientWaves";

function GradientWavesPage() {
  return (
    <GradientWaves
      hhorizonColor="#5227FF"
      waveColor="#FF9FFC"
      crestColor="#FFFFFF"
      speed={0.4}
      amplitude={2.5}
      waveScale={0.6}
      waveRatio={0.9}
      swell={35}
      turbulence={20}
      tilt={1.11}
      zoom={1}
      height={5.5}
      fogDepth={15}
      detail="medium"
      brightness={1}
      opacity={1}
      mouseInteraction
      parallaxStrength={0.5}
      grain
      grainIntensity={0.05}
    />
  );
}

export default GradientWavesPage;
