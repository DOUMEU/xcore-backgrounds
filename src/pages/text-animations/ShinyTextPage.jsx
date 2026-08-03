import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import ShinyText from "../../components/text-animations/ShinyText";

function ShinyTextPage() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <DemoLayout>
      <TextDemoWrapper variant="title">
        <ShinyText
          text="✨ Shiny Text Effect ✨"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default ShinyTextPage;
