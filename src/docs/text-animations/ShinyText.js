// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/ShinyText.jsx?raw";
import cssCode from "../../components/text-animations/ShinyText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ShinyText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ShinyText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ShinyText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ShinyText-JS-CSS",
};

const usageCode = `import ShinyText from './ShinyText';

<ShinyText
  text="✨ Shiny Text Effect"
  speed={2}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>`;

export const ShinyTextDocs = {
  title: "Shiny Text",
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

export default ShinyTextDocs;