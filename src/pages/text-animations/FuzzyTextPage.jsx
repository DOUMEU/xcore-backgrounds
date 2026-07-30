import DemoLayout from "../../components/DemoLayout";
import FuzzyText from "../../components/text-animations/FuzzyText";

function FuzzyTextPage() {
  return (
    <DemoLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize="clamp(5rem, 14vw, 11rem)"
        >
          404
        </FuzzyText>

        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          fontSize="clamp(1.5rem, 5vw, 4rem)"
        >
          Not Found
        </FuzzyText>
      </div>
    </DemoLayout>
  );
}

export default FuzzyTextPage;
