// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/ColorBends.jsx?raw";
import cssCode from "../../components/backgrounds/ColorBends.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ColorBends-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ColorBends-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ColorBends-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ColorBends-JS-CSS",
};

const usageCode = `import ColorBends from './ColorBends';
  
<ColorBends
  colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={90}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  noise={0.15}
  parallax={0.5}
  iterations={1}
  intensity={1.5}
  bandWidth={6}
  transparent
  autoRotate={0}
  color="#A855F7"
/>`;


export const ColorBendsDocs = {
  title: "ColorBends",
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

export default ColorBendsDocs;
