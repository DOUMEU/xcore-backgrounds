// 실제 컴포넌트 파일을 텍스트 그대로 가져옵니다 (Vite의 `?raw` 기능).
// 이렇게 하면 문서 코드가 실제 소스 코드와 항상 정확히 일치하고,
// 손으로 복붙할 필요도, 백틱이나 ${...}를 이스케이프할 필요도 없습니다.
import componentCode from "../../components/text-animations/DecryptedText.jsx?raw";

const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/DecryptedText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/DecryptedText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/DecryptedText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/DecryptedText-JS-CSS",
};

const usageCode = `import DecryptedText from './DecryptedText';

{/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={60}
maxIterations={10}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Click to decrypt (toggle mode) */}
<DecryptedText
text="Click to decrypt"
animateOn="view"
clickMode="once"
/>

{/* Example 4: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
  <DecryptedText
  text="This text animates when in view"
  revealDirection="start"
  sequential
  useOriginalCharsOnly={false}
/>
</div>`;

// TODO: 이 컴포넌트는 별도 CSS 파일이 없습니다 — 나중에 CSS 파일이 생기면
// 위와 똑같이 `?raw` import로 바꾸거나, 짧은 예시 코드를 직접 넣어주세요.
const cssCode = `-`;

export const DecryptedTextDocs = {
  title: "Decrypted Text",
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

export default DecryptedTextDocs;