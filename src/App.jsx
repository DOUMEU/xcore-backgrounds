import DocsRouter from "./docs/DocsRouter";

import AcidSquaresPage from "./pages/backgrounds/AcidSquaresPage";
import AntigravityPage from "./pages/backgrounds/AntigravityPage";
import AuroraPage from "./pages/backgrounds/AuroraPage";
import BalatroPage from "./pages/backgrounds/BalatroPage";
import BallpitPage from "./pages/backgrounds/BallpitPage";
import BeamsPage from "./pages/backgrounds/BeamsPage";
import ClickSparkPage from "./pages/backgrounds/ClickSparkPage";
import ColorBendsPage from "./pages/backgrounds/ColorBendsPage";
import DarkVeilPage from "./pages/backgrounds/DarkVeilPage";
import DitherPage from "./pages/backgrounds/DitherPage";
import DotFieldPage from "./pages/backgrounds/DotFieldPage";
import DotGridPage from "./pages/backgrounds/DotGridPage";
import EvilEyePage from "./pages/backgrounds/EvilEyePage";
import FaultyTerminalPage from "./pages/backgrounds/FaultyTerminalPage";
import FerrofluidPage from "./pages/backgrounds/FerrofluidPage";
import FloatingLinesPage from "./pages/backgrounds/FloatingLinesPage";
import GalaxyPage from "./pages/backgrounds/GalaxyPage";
import GhostCursorPage from "./pages/backgrounds/GhostCursorPage";
import GradientBlindsPage from "./pages/backgrounds/GradientBlindsPage";
import GradientWavesPage from "./pages/backgrounds/GradientWavesPage";
import GrainientPage from "./pages/backgrounds/GrainientPage";
import GridDistortionPage from "./pages/backgrounds/GridDistortionPage";
import GridMotionPage from "./pages/backgrounds/GridMotionPage";
import GridScanPage from "./pages/backgrounds/GridScanPage";
import HyperspeedPage from "./pages/backgrounds/HyperspeedPage";
import ImageTrailPage from "./pages/backgrounds/ImageTrailPage";
import IridescencePage from "./pages/backgrounds/IridescencePage";
import LaserFlowPage from "./pages/backgrounds/LaserFlowPage";
import LetterGlitchPage from "./pages/backgrounds/LetterGlitchPage";
import LightPillarPage from "./pages/backgrounds/LightPillarPage";
import LightRaysPage from "./pages/backgrounds/LightRaysPage";
import LightTunnelPage from "./pages/backgrounds/LightTunnelPage";
import LightfallPage from "./pages/backgrounds/LightfallPage";
import LightningPage from "./pages/backgrounds/LightningPage";
import LineWavesPage from "./pages/backgrounds/LineWavesPage";
import LiquidChromePage from "./pages/backgrounds/LiquidChromePage";
import LiquidEtherPage from "./pages/backgrounds/LiquidEtherPage";

import SplitTextPage from "./pages/text-animations/SplitTextPage";
import BlurTextPage from "./pages/text-animations/BlurTextPage";
import CircularTextPage from "./pages/text-animations/CircularTextPage";
import TextTypePage from "./pages/text-animations/TextTypePage";
import ShufflePage from "./pages/text-animations/ShufflePage";
import ShinyTextPage from "./pages/text-animations/ShinyTextPage";
import TextPressurePage from "./pages/text-animations/TextPressurePage";
import CurvedLoopPage from "./pages/text-animations/CurvedLoopPage";
import FuzzyTextPage from "./pages/text-animations/FuzzyTextPage";
import GradientTextPage from "./pages/text-animations/GradientTextPage";
import FallingTextPage from "./pages/text-animations/FallingTextPage";
import TextCursorPage from "./pages/text-animations/TextCursorPage";
import DecryptedTextPage from "./pages/text-animations/DecryptedTextPage";
import TrueFocusPage from "./pages/text-animations/TrueFocusPage";
import ScrollFloatPage from "./pages/text-animations/ScrollFloatPage";
import ScrollRevealPage from "./pages/text-animations/ScrollRevealPage";
import ASCIITextPage from "./pages/text-animations/ASCIITextPage";
import ScrambledTextPage from "./pages/text-animations/ScrambledTextPage";
import RotatingTextPage from "./pages/text-animations/RotatingTextPage";
import GlitchTextPage from "./pages/text-animations/GlitchTextPage";
import ScrollVelocityPage from "./pages/text-animations/ScrollVelocityPage";
import VariableProximityPage from "./pages/text-animations/VariableProximityPage";
import CountUpPage from "./pages/text-animations/CountUpPage";

const backgrounds = {
  "acid-squares": AcidSquaresPage,
  antigravity: AntigravityPage,
  aurora: AuroraPage,
  balatro: BalatroPage,
  ballpit: BallpitPage,
  beams: BeamsPage,
  "click-spark": ClickSparkPage,
  "color-bends": ColorBendsPage,
  "dark-veil": DarkVeilPage,
  dither: DitherPage,
  "dot-field": DotFieldPage,
  "dot-grid": DotGridPage,
  "evil-eye": EvilEyePage,
  "faulty-terminal": FaultyTerminalPage,
  ferrofluid: FerrofluidPage,
  "floating-lines": FloatingLinesPage,
  galaxy: GalaxyPage,
  "ghost-cursor": GhostCursorPage,
  "gradient-blinds": GradientBlindsPage,
  "gradient-waves": GradientWavesPage,
  grainient: GrainientPage,
  "grid-distortion": GridDistortionPage,
  "grid-motion": GridMotionPage,
  "grid-scan": GridScanPage,
  hyperspeed: HyperspeedPage,
  "image-trail": ImageTrailPage,
  iridescence: IridescencePage,
  "laser-flow": LaserFlowPage,
  "letter-glitch": LetterGlitchPage,
  "light-pillar": LightPillarPage,
  "light-rays": LightRaysPage,
  "light-tunnel": LightTunnelPage,
  lightfall: LightfallPage,
  lightning: LightningPage,
  "line-waves": LineWavesPage,
  "liquid-chrome": LiquidChromePage,
  "liquid-ether": LiquidEtherPage,
};

const textAnimations = {
  "split-text": SplitTextPage,
  "blur-text": BlurTextPage,
  "circular-text": CircularTextPage,
  "text-type": TextTypePage,
  shuffle: ShufflePage,
  "shiny-text": ShinyTextPage,
  "text-pressure": TextPressurePage,
  "curved-loop": CurvedLoopPage,
  "fuzzy-text": FuzzyTextPage,
  "gradient-text": GradientTextPage,
  "falling-text": FallingTextPage,
  "text-cursor": TextCursorPage,
  "decrypted-text": DecryptedTextPage,
  "true-focus": TrueFocusPage,
  "scroll-float": ScrollFloatPage,
  "scroll-reveal": ScrollRevealPage,
  "ascii-text": ASCIITextPage,
  "scrambled-text": ScrambledTextPage,
  "rotating-text": RotatingTextPage,
  "glitch-text": GlitchTextPage,
  "scroll-velocity": ScrollVelocityPage,
  "variable-proximity": VariableProximityPage,
  "count-up": CountUpPage,
};

function App() {
  const params = new URLSearchParams(window.location.search);

  const docsPath = params.get("docs");

  if (docsPath) {
    return <DocsRouter />;
  }

  const backgroundName = params.get("bg");
  const textAnimationName = params.get("text");

  const ActiveBackground = backgrounds[backgroundName];
  const ActiveTextAnimation = textAnimations[textAnimationName];

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#09090B",
      }}
    >
      {ActiveBackground && <ActiveBackground />}

      {ActiveTextAnimation && <ActiveTextAnimation />}
    </main>
  );
}

export default App;
