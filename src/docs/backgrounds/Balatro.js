// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Balatro.jsx?raw";
import cssCode from "../../components/backgrounds/Balatro.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Balatro-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Balatro-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Balatro-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Balatro-JS-CSS",
};

const usageCode = `import Balatro from './Balatro';
  
<Balatro
  isRotate={false}
  mouseInteraction
  pixelFilter={745}
  color1="#DE443B"
  color2="#006BB4"
  color3="#162325"
/>`;


export const BalatroDocs = {
  title: "Balatro",
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

export default BalatroDocs;
