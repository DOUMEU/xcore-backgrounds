import GhostCursor from "../../components/backgrounds/GhostCursor";

function GhostCursorPage() {
  return (
    <GhostCursor
      // Visuals
      color="#B497CF"
      brightness={2}
      edgeIntensity={0}
      // Trail and motion
      trailLength={50}
      inertia={0.5}
      // Post-processing
      grainIntensity={0.05}
      bloomStrength={0.1}
      bloomRadius={1}
      bloomThreshold={0.025}
      // Fade-out behavior
      fadeDelayMs={1000}
      fadeDurationMs={1500}
    />
  );
}

export default GhostCursorPage;
