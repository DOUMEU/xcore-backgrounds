import DotGrid from "../../components/backgrounds/DotGrid";

function DotGridPage() {
  return (
    <DotGrid
      dotSize={16}
      gap={32}
      baseColor="#5227FF"
      activeColor="#5227FF"
      proximity={150}
      speedTrigger={100}
      shockRadius={250}
      shockStrength={5}
      maxSpeed={5000}
      resistance={750}
      returnDuration={1.5}
    />
  );
}

export default DotGridPage;
