import DemoLayout from "../../components/DemoLayout";
import SplitText from "../../components/text-animations/SplitText";

function SplitTextPage() {
  return (
    <DemoLayout>
      <div
        style={{
          color: "#ffffff",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        <SplitText
          text="Hello, React Bits!"
          delay={60}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>
    </DemoLayout>
  );
}

export default SplitTextPage;
