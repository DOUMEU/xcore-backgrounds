// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/LiquidChrome.jsx?raw";
import cssCode from "../../components/backgrounds/LiquidChrome.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/LiquidChrome-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/LiquidChrome-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/LiquidChrome-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/LiquidChrome-JS-CSS",
};

const usageCode = `import LiquidChrome from './LiquidChrome';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightTunnel
    cableColor="#A855F7"
    pulseColor="#A855F7"
    tunnelColor="#5227FF"
    tunnelOpacity={0}
    speed={0.1}
    flowDirection="outward"
    pulseSpeed={2}
    pulseLength={0.28}
    pulseBlend={1}
    pulseWidth={1}
    cableCount={20}
    thickness={0.35}
    rimWidth={0.15}
    waviness={0.3}
    sway={0.5}
    size={1}
    centerX={0}
    centerY={0}
    glow={1}
    fadeNear={0.5}
    fadeFar={2}
    brightness={1}
    colorVariance
    grain
    grainIntensity={0.05}
    opacity={1}
    mouseInteraction
    mouseStrength={0.1}
  />
</div>`;


export const LiquidChromeDocs = {
  title: "Liquid Chrome",
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

export default LiquidChromeDocs;
