// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Antigravity.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Antigravity-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Antigravity-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Antigravity-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Antigravity-JS-CSS",
};

const usageCode = `import Antigravity from './Antigravity';

<div style={{ width: '100%', height: '400px', position: 'relative' }}>
  <Antigravity
    count={300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#5227FF"
    autoAnimate
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
/>
</div>`;

// 이 컴포넌트는 별도 CSS 파일이 없습니다 (순수 Three.js 캔버스 컴포넌트).
const cssCode = `-`;

export const AntigravityDocs = {
  title: "Antigravity",
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

export default AntigravityDocs;
