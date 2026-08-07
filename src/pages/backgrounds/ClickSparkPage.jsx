import ClickSpark from "../../components/backgrounds/ClickSpark";

function ClickSparkPage() {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={20}
      sparkRadius={40}
      sparkCount={12}
      duration={600}
      easing="ease-out"
      extraScale={1.2}
    />
  );
}

export default ClickSparkPage;
