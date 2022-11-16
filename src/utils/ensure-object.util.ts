export const ensureObject = (data: unknown): data is object =>
    typeof data === "object" && !Array.isArray(data) && !!data;
