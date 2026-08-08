// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/ScrollReveal.jsx?raw";
import cssCode from "../../components/text-animations/ScrollReveal.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ScrollReveal-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ScrollReveal-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ScrollReveal-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ScrollReveal-JS-CSS",
};

const usageCode = `import ScrollReveal from './ScrollReveal';

<ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>`;

export const ScrollRevealDocs = {
  title: "Scroll Reveal",
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

export default ScrollRevealDocs;