import LetterGlitch from "../../components/backgrounds/LetterGlitch";

function LetterGlitchPage() {
  return (
    <LetterGlitch
      glitchSpeed={50}
      centerVignette={true}
      outerVignette={false}
      smooth
      speed={10}
      colors={["#2b4539", "#61dca3", "#61b3dc"]}
      showCenterVignette
      showOuterVignette={false}
    />
  );
}

export default LetterGlitchPage;
