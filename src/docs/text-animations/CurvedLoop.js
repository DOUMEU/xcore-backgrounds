// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/CurvedLoop.jsx?raw";
import cssCode from "../../components/text-animations/CurvedLoop.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/CurvedLoop-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/CurvedLoop-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/CurvedLoop-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/CurvedLoop-JS-CSS",
};

const usageCode = `import CurvedLoop from './CurvedLoop';

// Basic usage
<CurvedLoop marqueeText="Welcome to React Bits ✦" />

// With custom props
<CurvedLoop 
  marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
  speed={2}
  curveAmount={400}
  direction="right"
  interactive
  className="custom-text-style"
/>

// Non-interactive with slower speed
<CurvedLoop 
/>`;

export const CurvedLoopDocs = {
  title: "Curved Loop",
  category: "Text Animations Code",
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

export default CurvedLoopDocs;