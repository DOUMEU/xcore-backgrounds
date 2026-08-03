import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import { textVariants } from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import FallingText from "../../components/text-animations/FallingText";

function FallingTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <FallingText
        key={replayKey}
        text={`React Bits is a library of animated and interactive React components
    designed to streamline UI development and simplify your workflow.`}
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
        fontSize={textVariants.body.fontSize}
        mouseConstraintStiffness={0.9}
      />
    </DemoLayout>
  );
}

export default FallingTextPage;
