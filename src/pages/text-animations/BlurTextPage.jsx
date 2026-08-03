import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import BlurText from "../../components/text-animations/BlurText";

function BlurTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <TextDemoWrapper variant="title" /*color="#A855F7"*/>
        <BlurText
          key={replayKey}
          text="Hello World"
          delay={200}
          animateBy="words"
          direction="top"
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default BlurTextPage;
