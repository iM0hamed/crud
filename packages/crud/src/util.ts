export function safeRequire<T = any>(path: string): T | null {
  try {
    const pack = require(path);
    return pack;
  } catch (_) {
    return null;
  }
}
