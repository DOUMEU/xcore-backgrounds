// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/backgrounds/Ballpit.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/Ballpit-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/Ballpit-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/Ballpit-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/Ballpit-JS-CSS",
};

const usageCode = `//Component inspired by Kevin Levron:
//https://x.com/soju22/status/1858925191671271801
  
import Ballpit from './Ballpit';

<div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit
    count={100}
    gravity={0.01}
    friction={0.9975}
    wallBounce={0.95}
    followCursor={false}
  />
</div>`;

// 이 컴포넌트는 별도 CSS 파일이 없습니다.
const cssCode = `-`;

export const BallpitDocs = {
  title: "Ballpit",
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

export default BallpitDocs;
