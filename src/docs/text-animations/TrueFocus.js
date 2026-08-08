// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/TrueFocus.jsx?raw";
import cssCode from "../../components/text-animations/TrueFocus.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/TrueFocus-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/TrueFocus-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/TrueFocus-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/TrueFocus-JS-CSS",
};

const usageCode = `import TrueFocus from './TrueFocus';

<TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="#5227FF"
animationDuration={0.5}
pauseBetweenAnimations={1}
/>`;

export const TrueFocusDocs = {
  title: "True Focus",
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

export default TrueFocusDocs;