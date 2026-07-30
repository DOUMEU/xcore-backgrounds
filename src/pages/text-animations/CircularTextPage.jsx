import DemoLayout from "../../components/DemoLayout";
import CircularText from "../../components/text-animations/CircularText";

function CircularTextPage() {
  return (
    <DemoLayout>
      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </DemoLayout>
  );
}

export default CircularTextPage;
