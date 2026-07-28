import Antigravity from "./components/backgrounds/Antigravity"
import Aurora from "./components/backgrounds/Aurora"
import Balatro from "./components/backgrounds/Balatro"



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
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <ActiveBackground {...selected.props} />
    </main>
  )
}

export default App