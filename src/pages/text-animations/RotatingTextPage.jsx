import DemoLayout from "../../components/DemoLayout";
import TextDemoWrapper from "../../components/TextDemoWrapper";
import RotatingText from "../../components/text-animations/RotatingText";

function RotatingTextPage() {
  return (
    <DemoLayout>
      <TextDemoWrapper variant="title">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span>Creative</span>

          <RotatingText
            texts={["thinking", "design", "ideas", "motion"]}
            mainClassName="rotating-box"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
            }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />
        </div>
      </TextDemoWrapper>
    </DemoLayout>
  );
}

export default RotatingTextPage;
