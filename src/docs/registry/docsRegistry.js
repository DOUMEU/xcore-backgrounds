import AcidSquaresDocs from "../backgrounds/AcidSquares";
import AntigravityDocs from "../backgrounds/Antigravity";
import AuroraDocs from "../backgrounds/Aurora";
import BalatroDocs from "../backgrounds/Balatro";
import BallpitDocs from "../backgrounds/Ballpit";
import BeamsDocs from "../backgrounds/Beams";
import ClickSparkDocs from "../backgrounds/ClickSpark";
import ColorBendsDocs from "../backgrounds/ColorBends";
import DarkVeilDocs from "../backgrounds/DarkVeil";
import DitherDocs from "../backgrounds/Dither";
import DotFieldDocs from "../backgrounds/DotField";
import DotGridDocs from "../backgrounds/DotGrid";
import EvilEyeDocs from "../backgrounds/EvilEye";
import FaultyTerminalDocs from "../backgrounds/FaultyTerminal";
import FerrofluidDocs from "../backgrounds/Ferrofluid";
import FloatingLinesDocs from "../backgrounds/FloatingLines";
import GalaxyDocs from "../backgrounds/Galaxy";
import GhostCursorDocs from "../backgrounds/GhostCursor";
import GradientBlindsDocs from "../backgrounds/GradientBlinds";
import GradientWavesDocs from "../backgrounds/GradientWaves";
import GrainientDocs from "../backgrounds/Grainient";
import GridDistortionDocs from "../backgrounds/GridDistortion";
import GridMotionDocs from "../backgrounds/GridMotion";
import GridScanDocs from "../backgrounds/GridScan";
import HyperspeedDocs from "../backgrounds/Hyperspeed";
import ImageTrailDocs from "../backgrounds/ImageTrail";
import LaserFlowDocs from "../backgrounds/LaserFlow";
import LetterGlitchDocs from "../backgrounds/LetterGlitch";
import LightPillarDocs from "../backgrounds/LightPillar";
import LightRaysDocs from "../backgrounds/LightRays";
import LightTunnelDocs from "../backgrounds/LightTunnel";
import LightfallDocs from "../backgrounds/Lightfall";
import LightningDocs from "../backgrounds/Lightning";
import LineWaves from "../backgrounds/LineWaves";
import LiquidChromeDocs from "../backgrounds/LiquidChrome";
import LiquidEtherDocs from "../backgrounds/LiquidEther";

import ASCIITextDocs from "../text-animations/ASCIIText";
import BlurTextDocs from "../text-animations/BlurText";
import CircularTextDocs from "../text-animations/CircularText";
import CountUpDocs from "../text-animations/CountUp";
import CurvedLoopDocs from "../text-animations/CurvedLoop";
import DecryptedTextDocs from "../text-animations/DecryptedText";
import FallingTextDocs from "../text-animations/FallingText";
import FuzzyTextDocs from "../text-animations/FuzzyText";
import GlitchTextDocs from "../text-animations/GlitchText";
import GradientTextDocs from "../text-animations/GradientText";
import RotatingTextDocs from "../text-animations/RotatingText";
import ScrambledTextDocs from "../text-animations/ScrambledText";
import ScrollFloatDocs from "../text-animations/ScrollFloat";
import ScrollRevealDocs from "../text-animations/ScrollReveal";
import ScrollVelocityDocs from "../text-animations/ScrollVelocity";
import ShinyTextDocs from "../text-animations/ShinyText";
import ShuffleDocs from "../text-animations/Shuffle";
import SplitTextDocs from "../text-animations/SplitText";
import TextCursorDocs from "../text-animations/TextCursor";
import TextPressureDocs from "../text-animations/TextPressure";
import TextTypeDocs from "../text-animations/TextType";
import TrueFocusDocs from "../text-animations/TrueFocus";
import VariableProximityDocs from "../text-animations/VariableProximity";

export const docsRegistry = {
  "backgrounds/acid-squares": AcidSquaresDocs,
  "backgrounds/antigravity": AntigravityDocs,
  "backgrounds/aurora": AuroraDocs,
  "backgrounds/balatro": BalatroDocs,
  "backgrounds/ballpit": BallpitDocs,
  "backgrounds/beams": BeamsDocs,
  "backgrounds/click-spark": ClickSparkDocs,
  "backgrounds/color-bends": ColorBendsDocs,
  "backgrounds/dark-veil": DarkVeilDocs,
  "backgrounds/dither": DitherDocs,
  "backgrounds/dot-field": DotFieldDocs,
  "backgrounds/dot-grid": DotGridDocs,
  "backgrounds/evil-eye": EvilEyeDocs,
  "backgrounds/faulty-terminal": FaultyTerminalDocs,
  "backgrounds/ferrofluid": FerrofluidDocs,
  "backgrounds/floating-lines": FloatingLinesDocs,
  "backgrounds/galaxy": GalaxyDocs,
  "backgrounds/ghost-cursor": GhostCursorDocs,
  "backgrounds/gradient-blinds": GradientBlindsDocs,
  "backgrounds/gradient-waves": GradientWavesDocs,
  "backgrounds/grainient": GrainientDocs,
  "backgrounds/grid-distortion": GridDistortionDocs,
  "backgrounds/grid-motion": GridMotionDocs,
  "backgrounds/grid-scan": GridScanDocs,
  "backgrounds/hyperspeed": HyperspeedDocs,
  "backgrounds/image-trail": ImageTrailDocs,
  "backgrounds/laser-flow": LaserFlowDocs,
  "backgrounds/letter-glitch": LetterGlitchDocs,
  "backgrounds/light-pillar": LightPillarDocs,
  "backgrounds/light-rays": LightRaysDocs,
  "backgrounds/light-tunnel": LightTunnelDocs,
  "backgrounds/lightfall": LightfallDocs,
  "backgrounds/lightning": LightningDocs,
  "backgrounds/line-waves": LineWaves,
  "backgrounds/liquid-chrome": LiquidChromeDocs,
  "backgrounds/liquid-ether": LiquidEtherDocs,

  "text-animations/ascii-text": ASCIITextDocs,
  "text-animations/blur-text": BlurTextDocs,
  "text-animations/circular-text": CircularTextDocs,
  "text-animations/count-up": CountUpDocs,
  "text-animations/curved-loop": CurvedLoopDocs,
  "text-animations/decrypted-text": DecryptedTextDocs,
  "text-animations/falling-text": FallingTextDocs,
  "text-animations/fuzzy-text": FuzzyTextDocs,
  "text-animations/glitch-text": GlitchTextDocs,
  "text-animations/gradient-text": GradientTextDocs,
  "text-animations/rotating-text": RotatingTextDocs,
  "text-animations/scrambled-text": ScrambledTextDocs,
  "text-animations/scroll-float": ScrollFloatDocs,
  "text-animations/scroll-reveal": ScrollRevealDocs,
  "text-animations/scroll-velocity": ScrollVelocityDocs,
  "text-animations/shiny-text": ShinyTextDocs,
  "text-animations/shuffle": ShuffleDocs,
  "text-animations/split-text": SplitTextDocs,
  "text-animations/text-cursor": TextCursorDocs,
  "text-animations/text-pressure": TextPressureDocs,
  "text-animations/text-type": TextTypeDocs,
  "text-animations/true-focus": TrueFocusDocs,
  "text-animations/variable-proximity": VariableProximityDocs,
};

export function getDocsByPath(path) {
  if (!path) {
    return null;
  }

  return docsRegistry[path] ?? null;
}

export default docsRegistry;
