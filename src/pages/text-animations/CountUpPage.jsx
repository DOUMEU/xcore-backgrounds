import { useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ReplayButton from "../../components/ReplayButton";
import CountUp from "../../components/text-animations/CountUp";

function CountUpPage() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <DemoLayout>
      <ReplayButton onClick={() => setReplayKey((key) => key + 1)} />

      <CountUp
        key={replayKey}
        from={0}
        to={500}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
        delay={0}
        style={{
          color: "#ffffff",
          fontSize: "clamp(40px, 8vw, 120px)",
          fontWeight: "700",
          lineHeight: 1,
        }}
      />
    </DemoLayout>
  );
}

export default CountUpPage;
