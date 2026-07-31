import { useEffect, useState } from "react";
import DemoLayout from "../../components/DemoLayout";
import ASCIIText from "../../components/text-animations/ASCIIText";

function ASCIITextPage() {
  const [fontSize, setFontSize] = useState(240);
  const [asciiSize, setAsciiSize] = useState(8);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      setFontSize(Math.max(120, Math.min(w * 0.22, 420)));
      setAsciiSize(Math.max(6, Math.min(w * 0.008, 12)));
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <DemoLayout>
      <ASCIIText
        text="Hey!"
        fontSize={fontSize}
        asciiFontSize={asciiSize}
        enableWaves
      />
    </DemoLayout>
  );
}

export default ASCIITextPage;
