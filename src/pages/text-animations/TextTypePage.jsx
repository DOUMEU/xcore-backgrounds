import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import TextType from "../../components/text-animations/TextType";

function TextTypePage() {
  const handleSentenceComplete = (sentence, index) => {
    console.log("Sentence completed:", sentence, index);
  };

  return (
    <DemoLayout>
      <TextDemoWrapper variant="title">
        <TextType
          text={[
            "Welcome to React Bits!",
            "Build some amazing experiences!",
            "Happy coding!",
          ]}
          typingSpeed={75}
          deletingSpeed={50}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
          onSentenceComplete={handleSentenceComplete}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default TextTypePage;
