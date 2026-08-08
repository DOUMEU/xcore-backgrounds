// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Iridescence.jsx?raw";
import cssCode from "../../components/backgrounds/Iridescence.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Iridescence",
  npm: "npx shadcn@latest add @react-bits/Iridescence",
  yarn: "yarn dlx shadcn@latest add @react-bits/Iridescence",
  bun: "bunx shadcn@latest add @react-bits/Iridescence",
};

const usageCode = `import Iridescence from './Iridescence';
  
<Iridescence
  color={[0.5,0.6,0.8]}
  mouseReact
  amplitude={0.1}
  speed={1}
/>`;


export const IridescenceDocs = {
  title: "Iridescence",
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

export default IridescenceDocs;
