// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/VariableProximity.jsx?raw";
import cssCode from "../../components/text-animations/VariableProximity.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/VariableProximity-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/VariableProximity-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/VariableProximity-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/VariableProximity-JS-CSS",
};

const usageCode = `import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const containerRef = useRef(null);

<div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={'Hover me! And then star React Bits on GitHub, or else...'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff="linear"
  />
</div>`;

export const VariableProximityDocs = {
  title: "Variable Proximity",
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

export default VariableProximityDocs;