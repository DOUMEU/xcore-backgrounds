// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/ScrambledText.jsx?raw";
import cssCode from "../../components/text-animations/ScrambledText.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/ScrambledText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/ScrambledText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/ScrambledText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/ScrambledText-JS-CSS",
};



const usageCode = `// Component inspired by Tom Miller from the GSAP community
// https://codepen.io/creativeocean/pen/NPWLwJM

import ScrambledText from './ScrambledText';
  
<ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars=".:"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Similique pariatur dignissimos porro eius quam doloremque 
  et enim velit nobis maxime.
</ScrambledText>`;

export const ScrambledTextDocs = {
  title: "Scrambled Text",
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

export default ScrambledTextDocs;