// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/AcidSquares.jsx?raw";
import cssCode from "../../components/backgrounds/AcidSquares.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/AcidSquares-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/AcidSquares-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/AcidSquares-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/AcidSquares-JS-CSS",
};

const usageCode = `import AcidSquares from './AcidSquares';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <AcidSquares
    color1="#5227FF"
    color2="#FF9FFC"
    color3="#7CFF67"
    detail="medium"
    speed={0.7}
    waveDepth={1}
    zoom={1.3}
    density={10}
    glow={1}
    exposure={2700}
    spread={0.3}
    stepSize={0.001}
    colorShift={0}
    contrast={1}
    brightness={1}
    opacity={1}
    mouseInteraction
    mouseStrength={0.1}
    mouseRadius={0.35}
    blur={0}
    grain
    grainIntensity={0.05}
  />
</div>`;

export const AcidSquaresDocs = {
  title: "Acid Squares",
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

export default AcidSquaresDocs;
