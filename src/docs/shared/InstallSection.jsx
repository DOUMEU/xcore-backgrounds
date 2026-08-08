import { useMemo, useState } from "react";
import CodeBlock from "./CodeBlock";
import "./InstallSection.css";

const MANAGER_ORDER = ["pnpm", "npm", "yarn", "bun"];

export default function InstallSection({
  commands = {},
  defaultManager = "npm",
  title = "Install",
}) {
  const availableManagers = useMemo(() => {
    return MANAGER_ORDER.filter((manager) => commands[manager]);
  }, [commands]);

  const initialManager = availableManagers.includes(defaultManager)
    ? defaultManager
    : availableManagers[0];

  const [activeManager, setActiveManager] = useState(initialManager);

  if (availableManagers.length === 0) {
    return null;
  }

  return (
    <section className="docs-install-section">
      <div className="docs-section-heading">
        <h2>{title}</h2>
      </div>

      <div
        className="docs-manager-tabs"
        role="tablist"
        aria-label="패키지 관리자"
      >
        {availableManagers.map((manager) => {
          const isActive = activeManager === manager;

          return (
            <button
              key={manager}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`docs-manager-tab ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveManager(manager)}
            >
              {manager}
            </button>
          );
        })}
      </div>

      <CodeBlock code={commands[activeManager]} language="bash" compact />
    </section>
  );
}
