const installCommands = {
  pnpm: "pnpm dlx shadcn@latest add @react-bits/SplitText-JS-CSS",
  npm: "npx shadcn@latest add @react-bits/SplitText-JS-CSS",
  yarn: "yarn dlx shadcn@latest add @react-bits/SplitText-JS-CSS",
  bun: "bunx shadcn@latest add @react-bits/SplitText-JS-CSS",
};

const usageCode = `import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

<SplitText
  text="Hello, you!"
  className="text-2xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
  showCallback
/>`;

const componentCode = `import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import "./SplitText.css";

gsap.registerPlugin(GSAPSplitText);

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new GSAPSplitText(textRef.current, {
      type: splitType,
    });

    const targets = split[splitType];

    gsap.fromTo(
      targets,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onLetterAnimationComplete,
      }
    );

    return () => {
      split.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={textRef}
      className={\`split-text \${className}\`}
      style={{ textAlign }}
    >
      {text}
    </p>
  );
}`;

const styleCode = `.Split-text {
  margin: 0;
  color: #ffffff;
  font-size: clamp(2.5rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}`;

export const SplitTextDocs = {
  title: "SplitText",
  category: "Text Animations",

  install: {
    defaultManager: "npm",
    commands: installCommands,
  },

  usage: {
    language: "jsx",
    code: usageCode,
  },

  code: [
    {
      id: "jsx",
      label: "SplitText.jsx",
      language: "jsx",
      code: componentCode,
    },
    {
      id: "css",
      label: "SplitText.css",
      language: "css",
      code: styleCode,
    },
  ],
};

export default SplitTextDocs;