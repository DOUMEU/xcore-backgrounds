// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/FloatingLines.jsx?raw";
import cssCode from "../../components/backgrounds/FloatingLines.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FloatingLines-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FloatingLines-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FloatingLines-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FloatingLines-JS-CSS",
};

const usageCode = `import FloatingLines from './FloatingLines';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.2}
    timeScale={0.5}
    pause={false}
    scanlineIntensity={0.5}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0.1}
    tint="#A7EF9E"
    mouseReact
    mouseStrength={0.5}
    pageLoadAnimation
    brightness={0.6}
  />
</div>`;


export const FloatingLinesDocs = {
  title: "Floating Lines",
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

export default FloatingLinesDocs;
