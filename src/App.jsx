import Antigravity from "./components/backgrounds/Antigravity"
import Aurora from "./components/backgrounds/Aurora"
import Balatro from "./components/backgrounds/Balatro"
import Ballpit from "./components/backgrounds/Ballpit"
import Beams from "./components/backgrounds/Beams"


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
  }
}

function App() {
  const params = new URLSearchParams(window.location.search)
  const backgroundName = params.get("bg") || "antigravity"

  const selected =
    backgrounds[backgroundName] || backgrounds.antigravity

  const ActiveBackground = selected.component

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
      <ActiveBackground {...selected.props} />
    </main>
  )
}

export default App