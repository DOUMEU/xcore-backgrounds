// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/TextType.jsx?raw";
import cssCode from "../../components/text-animations/TextType.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/TextType-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/TextType-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/TextType-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/TextType-JS-CSS",
};

const usageCode = `import TextType from './TextType';

<TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>`;

export const TextTypeDocs = {
  title: "Text Type",
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

export default TextTypeDocs;