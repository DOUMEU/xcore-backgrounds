// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Beams.jsx?raw";
import cssCode from "../../components/backgrounds/Beams.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Beams-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Beams-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Beams-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Beams-JS-CSS",
};

const usageCode = `import Beams from './Beams';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>`;


export const BeamsDocs = {
  title: "Beams",
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

export default BeamsDocs;
