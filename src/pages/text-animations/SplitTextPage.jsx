import DemoLayout from "../../components/DemoLayout";
import SplitText from "../../components/text-animations/SplitText";

function SplitTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <SplitText
        text="Hello, React Bits!"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </DemoLayout>
  );
}

export default SplitTextPage;
