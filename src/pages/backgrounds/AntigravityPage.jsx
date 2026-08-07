import Antigravity from "../../components/backgrounds/Antigravity";

function AntigravityPage() {
  return (
    <Antigravity
      count={300}
      magnetRadius={10}
      ringRadius={10}
      waveSpeed={0.4}
      waveAmplitude={1}
      particleSize={2}
      lerpSpeed={0.1}
      color="#FF9FFC"
      autoAnimate={false}
      particleVariance={1}
      rotationSpeed={0}
      depthFactor={1}
      pulseSpeed={3}
      particleShape="capsule"
      fieldStrength={10}
    />
  );
}

export default AntigravityPage;
