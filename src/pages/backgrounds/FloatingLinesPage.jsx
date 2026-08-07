import FloatingLines from "../../components/backgrounds/FloatingLines";

function FloatingLinesPage() {
  return (
    <FloatingLines
      enabledWaves={["top", "middle", "bottom"]}
      lineCount={8}
      lineDistance={8}
      bendRadius={8}
      bendStrength={-2}
      interactive
      parallax
      animationSpeed={1}
      gradientStart="#5227FF"
      gradientMiddle="#FF9FFC"
      gradientEnd="#7CFF67"
    />
  );
}

export default FloatingLinesPage;
