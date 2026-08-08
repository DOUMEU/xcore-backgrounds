// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/GridDistortion.jsx?raw";
import cssCode from "../../components/backgrounds/GridDistortion.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GridDistortion-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GridDistortion-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GridDistortion-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GridDistortion-JS-CSS",
};

const usageCode = `import GridDistortion from './GridDistortion';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GradientWaves
    horizonColor="#5227FF"
    waveColor="#FF9FFC"
    crestColor="#FFFFFF"
    speed={0.4}
    amplitude={2.5}
    waveScale={0.6}
    waveRatio={0.9}
    swell={35}
    turbulence={20}
    tilt={1.11}
    zoom={1}
    height={5.5}
    fogDepth={15}
    detail="medium"
    brightness={1}
    opacity={1}
    mouseInteraction
    parallaxStrength={0.5}
    grain
    grainIntensity={0.05}
  />
</div>`;


export const GridDistortionDocs = {
  title: "Grid Distortion",
  category: "Backgrounds Code",
  install: {
    defaultManager: "pnpm",
    commands: installCommands,
  },

  usage: {
    language: "jsx",
    code: usageCode,
  },

  code: [
    {
      id: "jsx",
      label: "jsx",
      language: "jsx",
      code: componentCode,
    },
    {
      id: "css",
      label: "css",
      language: "css",
      code: cssCode,
    },
  ],
};

export default GridDistortionDocs;
