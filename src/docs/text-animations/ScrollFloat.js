// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/ScrollFloat.jsx?raw";
import cssCode from "../../components/text-animations/ScrollFloat.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ScrollFloat-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ScrollFloat-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ScrollFloat-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ScrollFloat-JS-CSS",
};

const usageCode = `import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  React Bits
</ScrollFloat>`;

export const ScrollFloatDocs = {
  title: "Scroll Float",
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

export default ScrollFloatDocs;