// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Aurora.jsx?raw";
import cssCode from "../../components/backgrounds/Aurora.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Aurora-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Aurora-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Aurora-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Aurora-JS-CSS",
};

const usageCode = `import Aurora from './Aurora';
  
<Aurora
  colorStops={["#7cff67","#B497CF","#5227FF"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>`;


export const AuroraDocs = {
  title: "Aurora",
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

export default AuroraDocs;
