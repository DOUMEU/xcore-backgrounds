import InstallSection from "../shared/InstallSection";
import DocsSection from "../shared/DocsSection";
import CodeTabs from "../shared/CodeTabs";

import "./DocsLayout.css";

export default function DocsLayout({ docs }) {
  if (!docs) {
    return null;
  }

  return (
    <main className="xcore-docs">
      <header className="xcore-docs__header">
        <span className="xcore-docs__category">{docs.category}</span>

        <h1 className="xcore-docs__title">{docs.title}</h1>

        {docs.description && (
          <p className="xcore-docs__description">{docs.description}</p>
        )}
      </header>

      <div className="xcore-docs__content">
        {docs.install && (
          <InstallSection
            commands={docs.install.commands}
            defaultManager={docs.install.defaultManager}
          />
        )}

        {docs.usage && (
          <DocsSection
            title="Usage"
            code={docs.usage.code}
            language={docs.usage.language}
          />
        )}

        {docs.code && <CodeTabs title="Code" files={docs.code} />}
      </div>
    </main>
  );
}
