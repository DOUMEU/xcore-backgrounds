// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/DotGrid.jsx?raw";
import cssCode from "../../components/backgrounds/DotGrid.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DotGrid-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DotGrid-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DotGrid-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DotGrid-JS-CSS",
};

const usageCode = `import DotGrid from './DotGrid';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DotField
    dotRadius={1.5}
    dotSpacing={14}
    bulgeStrength={67}
    glowRadius={160}
    sparkle={false}
    waveAmplitude={0}
    cursorRadius={500}
    cursorForce={0.1}
    bulgeOnly
    gradientFrom="#A855F7"
    gradientTo="#B497CF"
    glowColor="#120F17"
/>
</div>`;


export const DotGridDocs = {
  title: "Dot Grid",
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

export default DotGridDocs;
