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
