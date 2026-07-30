import DemoLayout from "../../components/DemoLayout";
import FallingText from "../../components/text-animations/FallingText";

function FallingTextPage() {
  return (
    <DemoLayout>
      <FallingText
        text={`React Bits is a library of animated and interactive React components
    designed to streamline UI development and simplify your workflow.
    Build creative interfaces faster with playful motion responsive effects
    smooth transitions dynamic typography and immersive interactions.`}
        highlightWords={[
          "React",
          "animated",
          "interactive",
          "components",
          "effects",
          "Creative",
          "UI",
          "Motion ",
          "Typography",
          "immersive",
          "development",
          "workflow",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </DemoLayout>
  );
}

export default FallingTextPage;
