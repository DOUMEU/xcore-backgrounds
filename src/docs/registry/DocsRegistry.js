import SplitTextDocs from "../text-animations/SplitText";

export const docsRegistry = {
  "text-animations/split-text": SplitTextDocs,
};

export function getDocsByPath(path) {
  if (!path) {
    return null;
  }

  return docsRegistry[path] ?? null;
}

export default docsRegistry;