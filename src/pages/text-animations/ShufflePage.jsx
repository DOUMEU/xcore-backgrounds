import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ReplayButton from "../../components/ReplayButton";
import Shuffle from "../../components/text-animations/Shuffle";

function ShufflePage() {
  const [replayKey, setReplayKey] = useState(0);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <TextDemoWrapper variant="title">
        <Shuffle
          key={replayKey}
          text="Hello World"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          loop={false}
          loopDelay={0}
          onShuffleComplete={handleAnimationComplete}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default ShufflePage;
