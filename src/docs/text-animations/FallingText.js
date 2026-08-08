// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/FallingText.jsx?raw";
import cssCode from "../../components/text-animations/FallingText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/FallingText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/FallingText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/FallingText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/FallingText-JS-CSS",
};

const usageCode = `import FallingText from './FallingText';
  
<FallingText
  text={\`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.\`}
  highlightWords={["React", "Bits", "animated", "components", "simplify"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>`;

export const FallingTextDocs = {
  title: "Falling Text",
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

export default FallingTextDocs;