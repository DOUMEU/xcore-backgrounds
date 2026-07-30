import DemoLayout from "../../components/DemoLayout";
import CurvedLoop from "../../components/text-animations/CurvedLoop";

function CurvedLoopPage() {
  return (
    <DemoLayout>
      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={2}
        curveAmount={400}
        direction="right"
        interactive
        className="custom-text-style"
      />
    </DemoLayout>
  );
}

export default CurvedLoopPage;
