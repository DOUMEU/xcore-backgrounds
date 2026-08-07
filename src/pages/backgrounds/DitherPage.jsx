import Dither from "../../components/backgrounds/Dither";

function DitherPage() {
  return (
    <Dither
      waveSpeed={0.05}
      waveFrequency={3}
      waveAmplitude={0.3}
      waveColor={[0.5, 0.5, 0.5]}
      colorNum={4}
      pixelSize={2}
      disableAnimation={false}
      enableMouseInteraction
      mouseRadius={1}
    />
  );
}

export default DitherPage;
