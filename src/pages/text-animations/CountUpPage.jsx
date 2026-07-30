import DemoLayout from "../../components/DemoLayout";
import CountUp from "../../components/text-animations/CountUp";

function CountUpPage() {
  return (
    <DemoLayout>
      <CountUp
        from={0}
        to={500}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
        delay={0}
        style={{
          color: "#ffffff",
          fontSize: "clamp(40px, 8vw, 120px)",
          fontWeight: "700",
          lineHeight: 1,
        }}
      />
    </DemoLayout>
  );
}

export default CountUpPage;
