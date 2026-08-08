// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/LetterGlitch.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/LetterGlitch-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/LetterGlitch-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/LetterGlitch-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/LetterGlitch-JS-CSS",
};

const usageCode = `import LetterGlitch from './LetterGlitch';
  
<LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth
  speed={10}
  colors={["#2b4539","#61dca3","#61b3dc"]}
  showCenterVignette
  showOuterVignette={false}
/>`;

// 이 컴포넌트는 별도 CSS 파일이 없습니다 (순수 Three.js 캔버스 컴포넌트).
const cssCode = `-`;

export const LetterGlitchDocs = {
  title: "Letter Glitch",
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

export default LetterGlitchDocs;
