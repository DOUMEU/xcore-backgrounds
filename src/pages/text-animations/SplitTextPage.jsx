import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import SplitText from "../../components/text-animations/SplitText";

function SplitTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="hero">
        <SplitText
          text="Hello, Split Text!"
          className="split-text-demo"
          delay={60}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          autoPlay
          autoPlayInterval={3}
        />
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default SplitTextPage;
