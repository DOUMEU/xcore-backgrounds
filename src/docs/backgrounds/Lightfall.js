// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Lightfall.jsx?raw";
import cssCode from "../../components/backgrounds/Lightfall.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Lightfall-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Lightfall-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Lightfall-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Lightfall-JS-CSS",
};

const usageCode = `import Lightfall from './Lightfall';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Lightfall
    colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
    backgroundColor="#0A29FF"
    speed={0.5}
    streakCount={2}
    streakWidth={1}
    streakLength={1}
    glow={1}
    density={0.6}
    twinkle={1}
    zoom={3}
    backgroundGlow={0.5}
    opacity={1}
    mouseInteraction
    mouseStrength={0.5}
    mouseRadius={1}
    color1="#A6C8FF"
    color2="#5227FF"
    color3="#FF9FFC"
/>
</div>`;


export const LightfallDocs = {
  title: "Lightfall",
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

export default LightfallDocs;
