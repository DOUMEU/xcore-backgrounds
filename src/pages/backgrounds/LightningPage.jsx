import Lightning from "../../components/backgrounds/Lightning";

function LightningPage() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} />
    </div>
  );
}

export default LightningPage;
