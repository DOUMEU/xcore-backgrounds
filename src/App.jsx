import Antigravity from "./components/backgrounds/Antigravity";
import Aurora from "./components/backgrounds/Aurora";
import Balatro from "./components/backgrounds/Balatro";
import Ballpit from "./components/backgrounds/Ballpit";
import Beams from "./components/backgrounds/Beams";
import ClickSpark from "./components/backgrounds/ClickSpark";
import ColorBends from "./components/backgrounds/ColorBends";

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
