import DemoLayout from "../../components/DemoLayout";
import Shuffle from "../../components/text-animations/Shuffle";

function ShufflePage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <Shuffle
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
    </DemoLayout>
  );
}

export default ShufflePage;
