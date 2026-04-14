export const withBase = (path: string) => {
  if (!path) return path;
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }

  const basePath = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}` || "/";
};