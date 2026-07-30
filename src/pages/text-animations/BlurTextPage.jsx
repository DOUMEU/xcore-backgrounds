import DemoLayout from "../../components/DemoLayout";
import BlurText from "../../components/text-animations/BlurText";

function BlurTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <BlurText
        text="Isn't this so cool?!"
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </DemoLayout>
  );
}

export default BlurTextPage;
