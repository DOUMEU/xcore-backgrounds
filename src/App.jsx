import Antigravity from "./components/backgrounds/Antigravity";
import Aurora from "./components/backgrounds/Aurora";
import Balatro from "./components/backgrounds/Balatro";
import Ballpit from "./components/backgrounds/Ballpit";
import Beams from "./components/backgrounds/Beams";
import ClickSpark from "./components/backgrounds/ClickSpark";
import ColorBends from "./components/backgrounds/ColorBends";
import DarkVeil from "./components/backgrounds/DarkVeil";
import Dither from "./components/backgrounds/Dither";
import DotField from "./components/backgrounds/DotField";
import DotGrid from "./components/backgrounds/DotGrid";
import EvilEye from "./components/backgrounds/EvilEye";
import FaultyTerminal from "./components/backgrounds/FaultyTerminal";
import Ferrofluid from "./components/backgrounds/Ferrofluid";
import FloatingLines from "./components/backgrounds/FloatingLines";

import SplitTextPage from "./pages/text-animations/SplitTextPage";

const backgrounds = {
  antigravity: {
    component: Antigravity,
    props: {
      count: 300,
      magnetRadius: 10,
      ringRadius: 10,
      waveSpeed: 0.4,
      waveAmplitude: 1,
      particleSize: 2,
      lerpSpeed: 0.1,
      color: "#FF9FFC",
      autoAnimate: false,
      particleVariance: 1,
      rotationSpeed: 0,
      depthFactor: 1,
      pulseSpeed: 3,
      particleShape: "capsule",
      fieldStrength: 10,
    },
  },

  aurora: {
    component: Aurora,
    props: {
      colorStops: ["#5227FF", "#7cff67", "#5227FF"],
      amplitude: 1,
      blend: 0.5,
    },
  },

  balatro: {
    component: Balatro,
    props: {
      isRotate: false,
      mouseInteraction: true,
      pixelFilter: 745,
      color1: "#DE443B",
      color2: "#006BB4",
      color3: "#162325",
    },
  },

  ballpit: {
    component: Ballpit,
    props: {
      count: 100,
      gravity: 0.5,
      friction: 0.9975,
      wallBounce: 0.95,
      followCursor: true,
      colors: ["#5227FF", "#7cff67", "#ff6b6b"],
    },
  },

  beams: {
    component: Beams,
    props: {
      speed: 2,
      noiseIntensity: 1.75,
      scale: 0.2,
      beamNumber: 12,
      beamWidth: 2,
      beamHeight: 15,
      lightColor: "#ffffff",
      rotation: 0,
    },
  },

  clickspark: {
    component: ClickSpark,
    props: {
      sparkColor: "#ffffff",
      sparkSize: 20,
      sparkRadius: 40,
      sparkCount: 12,
      duration: 600,
      easing: "ease-out",
      extraScale: 1.2,
    },
  },

  colorbends: {
    component: ColorBends,
    props: {
      rotation: 90,
      speed: 0.2,
      colors: ["#5227FF", "#FF9FFC", "#7CFF67"],
      transparent: false,
      autoRotate: 0,
      scale: 1,
      frequency: 1,
      warpStrength: 1,
      mouseInfluence: 1,
      parallax: 0.5,
      noise: 0.15,
      iterations: 1,
      intensity: 1.5,
      bandWidth: 6,
    },
  },

  darkveil: {
    component: DarkVeil,
    props: {
      hueShift: 0.5,
      noiseIntensity: 0,
      scanlineIntensity: 0.5,
      Speed: 0.5,
      ScanlineFrequency: 0,
      warpAmount: 0.0,
    },
  },

  dither: {
    component: Dither,
    props: {
      waveSpeed: 0.05,
      waveFrequency: 3,
      waveAmplitude: 0.3,
      waveColor: [0.5, 0.5, 0.5],
      colorNum: 4,
      pixelSize: 2,
      disableAnimation: false,
      enableMouseInteraction: true,
      mouseRadius: 1,
    },
  },

  dotfield: {
    component: DotField,
    props: {
      dotRadius: 1.5,
      dotSpacing: 14,
      cursorRadius: 500,
      cursorForce: 0.1,
      bulgeOnly: true,
      bulgeStrength: 67,
      glowRadius: 160,
      sparkle: false,
      waveAmplitude: 0,
      gradientFrom: "rgba(168, 85, 247, 0.35)",
      gradientTo: "rgba(180, 151, 207, 0.25)",
      glowColor: "#120F17",
    },
  },

  dotgrid: {
    component: DotGrid,
    props: {
      dotSize: 16,
      gap: 32,
      baseColor: "#5227FF",
      activeColor: "#5227FF",
      proximity: 150,
      speedTrigger: 100,
      shockRadius: 250,
      shockStrength: 5,
      maxSpeed: 5000,
      resistance: 750,
      returnDuration: 1.5,
    },
  },

  evileye: {
    component: EvilEye,
    props: {
      pupilSize: 20,
      irisColor: "#5227FF",
      pupilColor: "#000000",
      glowColor: "#ffffff",
      glowIntensity: 0.5,
    },
  },

  faultyterminal: {
    component: FaultyTerminal,
    props: {
      scale: 1.5,
      gridMul: [2, 1],
      digitSize: 2,
      timeScale: 0.5,
      pause: false,
      scanlineIntensity: 0.5,
      glitchAmount: 1,
      flickerAmount: 1,
      noiseAmp: 1,
      chromaticAberration: 0,
      dither: 0,
      curvature: 0.1,
      tint: "#A7EF9E",
      mouseReact: true,
      mouseStrength: 0.5,
      pageLoadAnimation: true,
      brightness: 0.5,
    },
  },

  ferrofluid: {
    component: Ferrofluid,
    props: {
      particleCount: 1000,
      particleSize: 2,
      magneticFieldStrength: 1,
      noiseIntensity: 0.1,
      colorPalette: ["#5227FF", "#FF9FFC", "#7CFF67"],
    },
  },

  floatinglines: {
    component: FloatingLines,
    props: {
      enabledWaves: ["top", "middle", "bottom"],
      // Array - specify line count per wave; Number - same count for all waves
      lineCount: 8,
      // Array - specify line distance per wave; Number - same distance for all waves
      lineDistance: 8,
      bendRadius: 8,
      bendStrength: -2,
      interactive: true,
      parallax: true,
      animationSpeed: 1,
      gradientStart: "#5227FF",
      gradientMiddle: "#FF9FFC",
      gradientEnd: "#7CFF67",
    },
  },
};

const textAnimations = {
  "split-text": SplitTextPage,
  // "blur-text": BlurTextPage,
  // "shiny-text": ShinyTextPage,
};

function App() {
  const params = new URLSearchParams(window.location.search);

  const backgroundName = params.get("bg");
  const textAnimationName = params.get("text");

  const selected = backgroundName ? backgrounds[backgroundName] : null;

  const ActiveBackground = selected?.component;
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
      {ActiveBackground && <ActiveBackground {...selected.props} />}

      {ActiveTextAnimation && <ActiveTextAnimation />}
    </main>
  );
}

export default App;
