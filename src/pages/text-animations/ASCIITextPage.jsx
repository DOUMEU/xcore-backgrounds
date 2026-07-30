import DemoLayout from "../../components/DemoLayout";
import ASCIIText from "../../components/text-animations/ASCIIText";

function ASCIITextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <ASCIIText text="Hey!" enableWaves asciiFontSize={8} />
    </DemoLayout>
  );
}

export default ASCIITextPage;
