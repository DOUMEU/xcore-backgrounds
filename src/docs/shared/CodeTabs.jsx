import { useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";
import "./CodeTabs.css";

export default function CodeTabs({ files = [], title = "Code" }) {
  const [activeId, setActiveId] = useState(files[0]?.id ?? "");

  useEffect(() => {
    if (!files.some((file) => file.id === activeId)) {
      setActiveId(files[0]?.id ?? "");
    }
  }, [files, activeId]);

  if (files.length === 0) {
    return null;
  }

  const activeFile = files.find((file) => file.id === activeId) ?? files[0];

  return (
    <section className="docs-code-section">
      <div className="docs-section-heading">
        <h2>{title}</h2>
      </div>

      <div className="docs-file-tabs" role="tablist" aria-label="코드 파일">
        {files.map((file) => {
          const isActive = activeFile.id === file.id;

          return (
            <button
              key={file.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`docs-file-tab ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveId(file.id)}
            >
              {file.label}
            </button>
          );
        })}
      </div>

      <CodeBlock code={activeFile.code} language={activeFile.language} />
    </section>
  );
}
