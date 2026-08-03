import CodeBlock from "./CodeBlock";
import "./DocsSection.css";

export default function DocsSection({
  title,
  code,
  language = "jsx",
  label,
  children,
}) {
  return (
    <section className="docs-content-section">
      {title && (
        <div className="docs-section-heading">
          <h2>{title}</h2>
        </div>
      )}

      {children ?? (
        <CodeBlock code={code} language={language} label={label ?? language} />
      )}
    </section>
  );
}
