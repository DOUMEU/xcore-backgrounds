import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import SplitText from "../../components/text-animations/SplitText";

function SplitTextPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <TextDemoWrapper variant="hero">
        <SplitText
          key={replayKey}
          text="Hello, Split Text!"
          className="split-text-demo"
          delay={60}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default SplitTextPage;
