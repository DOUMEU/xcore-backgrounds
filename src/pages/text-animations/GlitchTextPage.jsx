import DemoLayout from "../../components/DemoLayout";
import GlitchText from "../../components/text-animations/GlitchText";

function GlitchTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <GlitchText
        speed={1}
        enableShadows
        enableOnHover={false}
        className="custom-class"
      >
        Glitch Text
      </GlitchText>
    </DemoLayout>
  );
}

export default GlitchTextPage;
