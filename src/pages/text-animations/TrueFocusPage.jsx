import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import TrueFocus from "../../components/text-animations/TrueFocus";

function TrueFocusPage() {
  const handleSentenceComplete = (sentence, index) => {
    console.log("Sentence completed:", sentence, index);
  };

  return (
    <DemoLayout>
      <TextDemoWrapper variant="title">
        <TrueFocus
          sentence="True Focus"
          manualMode={false}
          blurAmount={5}
          borderColor="#5227FF"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default TrueFocusPage;
