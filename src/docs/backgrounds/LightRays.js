// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/LightRays.jsx?raw";
import cssCode from "../../components/backgrounds/LightRays.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/LightRays-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/LightRays-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/LightRays-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/LightRays-JS-CSS",
};

const usageCode = `import LightRays from './LightRays';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1}
    lightSpread={0.5}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
/>
</div>`;


export const LightRaysDocs = {
  title: "Light Rays",
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

export default LightRaysDocs;
