import { useState } from "react";
import "./CodeBlock.css";

function CopyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CodeBlock({
  code = "",
  language = "jsx",
  className = "",
  compact = false,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error("코드 복사에 실패했습니다.", error);
    }
  };

  return (
    <div
      className={`docs-code-block ${compact ? "docs-code-block--compact" : ""} ${className}`.trim()}
    >
      <button
        type="button"
        className={`docs-copy-button ${copied ? "is-copied" : ""}`}
        onClick={handleCopy}
        aria-label={copied ? "복사 완료" : "코드 복사"}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>

      <pre className="docs-code-pre">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
