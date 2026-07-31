import DocsLayout from "./layout/DocsLayout";
import { getDocsByPath } from "./registry/docsRegistry";

export default function DocsRouter() {
  const searchParams = new URLSearchParams(window.location.search);
  const docsPath = searchParams.get("docs");

  const docs = getDocsByPath(docsPath);

  if (!docsPath) {
    return null;
  }

  if (!docs) {
    return (
      <main className="xcore-docs">
        <div className="xcore-docs__header">
          <span className="xcore-docs__category">Xcore Docs</span>

          <h1 className="xcore-docs__title">Document not found</h1>

          <p className="xcore-docs__description">
            요청한 문서 경로를 찾을 수 없습니다.
          </p>
        </div>
      </main>
    );
  }

  return <DocsLayout docs={docs} />;
}
