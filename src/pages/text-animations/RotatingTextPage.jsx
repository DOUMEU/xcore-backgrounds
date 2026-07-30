import DemoLayout from "../../components/DemoLayout";
import RotatingText from "../../components/text-animations/RotatingText";

function RotatingTextPage() {
  return (
    <DemoLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          fontSize: "40px",
          fontWeight: "700",
          color: "#ffffff",
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
    </DemoLayout>
  );
}

export default RotatingTextPage;
