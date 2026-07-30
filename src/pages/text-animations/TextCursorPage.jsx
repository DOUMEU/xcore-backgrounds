import DemoLayout from "../../components/DemoLayout";
import TextCursor from "../../components/text-animations/TextCursor";

function TextCursorPage() {
  const handleSentenceComplete = (sentence, index) => {
    console.log("Sentence completed:", sentence, index);
  };

  return (
    <DemoLayout>
      <TextCursor
        text="🫠"
        spacing={80}
        followMouseDirection
        randomFloat
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
    </DemoLayout>
  );
}

export default TextCursorPage;
