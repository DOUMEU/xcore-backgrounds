// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/GhostCursor.jsx?raw";
import cssCode from "../../components/backgrounds/GhostCursor.css?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/GhostCursor-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/GhostCursor-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/GhostCursor-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/GhostCursor-JS-CSS",
};

const usageCode = `import GhostCursor from './GhostCursor'

<div style={{ height: 600, position: 'relative' }}>
  <GhostCursor
    // Visuals
    color="#B497CF"
    brightness={2}
    edgeIntensity={0}

    // Trail and motion
    trailLength={50}
    inertia={0.5}

    // Post-processing
    grainIntensity={0.05}
    bloomStrength={0.1}
    bloomRadius={1}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />
</div>`;


export const GhostCursorDocs = {
  title: "Ghost Cursor",
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

export default GhostCursorDocs;
