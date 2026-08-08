// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/LightPillar.jsx?raw";
import cssCode from "../../components/backgrounds/LightPillar.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/LightPillar-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/LightPillar-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/LightPillar-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/LightPillar-JS-CSS",
};

const usageCode = `import LightPillar from './LightPillar';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightPillar
    topColor="#5227FF"
    bottomColor="#FF9FFC"
    intensity={1}
    rotationSpeed={0.3}
    glowAmount={0.002}
    pillarWidth={3}
    pillarHeight={0.4}
    noiseIntensity={0.5}
    pillarRotation={25}
    interactive={false}
    mixBlendMode="screen"
    quality="high"
/>
</div>`;


export const LightPillarDocs = {
  title: "Light Pillar",
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

export default LightPillarDocs;
