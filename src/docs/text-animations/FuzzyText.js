// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/FuzzyText.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FuzzyText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FuzzyText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FuzzyText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FuzzyText-JS-CSS",
};

const usageCode = `import FuzzyText from './FuzzyText';
  
<FuzzyText 
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>
  404
</FuzzyText>`;

// TODO: 이 컴포넌트는 별도 CSS 파일이 없습니다 — 나중에 CSS 파일이 생기면
// 위와 똑같이 `?raw` import로 바꾸거나, 짧은 예시 코드를 직접 넣어주세요.
const cssCode = `-`;

export const FuzzyTextDocs = {
  title: "Fuzzy Text",
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

export default FuzzyTextDocs;