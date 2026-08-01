import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import BlurText from "../../components/text-animations/BlurText";

function BlurTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="title" /*color="#A855F7"*/>
        <BlurText
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
