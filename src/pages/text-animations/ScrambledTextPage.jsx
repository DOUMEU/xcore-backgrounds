import DemoLayout from "../../components/DemoLayout";
import ScrambledText from "../../components/text-animations/ScrambledText";

function ScrambledTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        pariatur dignissimos porro eius quam doloremque et enim velit nobis
        maxime.
      </ScrambledText>
    </DemoLayout>
  );
}

export default ScrambledTextPage;
