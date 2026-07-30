import DemoLayout from "../../components/DemoLayout";
import GradientText from "../../components/text-animations/GradientText";

function GradientTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <GradientText
        colors={["#5227FF", "#FF9FFC", "#B497CF"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class"
      >
        Add a splash of color!
      </GradientText>
    </DemoLayout>
  );
}

export default GradientTextPage;
