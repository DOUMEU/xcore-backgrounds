// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/GradientBlinds.jsx?raw";
import cssCode from "../../components/backgrounds/GradientBlinds.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GradientBlinds-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GradientBlinds-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GradientBlinds-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GradientBlinds-JS-CSS",
};

const usageCode = `import GradientBlinds from './GradientBlinds';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GradientBlinds
    gradientColors={['#FF9FFC', '#5227FF']}
    angle={20}
    noise={0.5}
    blindCount={16}
    blindMinWidth={60}
    spotlightRadius={0.5}
    spotlightSoftness={1}
    spotlightOpacity={1}
    mouseDampening={0.15}
    distortAmount={0}
    shineDirection="left"
    mixBlendMode="lighten"
    color1="#FF9FFC"
    color2="#5227FF"
/>
</div>`;


export const GradientBlindsDocs = {
  title: "Gradient Blinds",
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

export default GradientBlindsDocs;
