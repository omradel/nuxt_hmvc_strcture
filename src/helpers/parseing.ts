export function safeParse<T>(value: string | null): T | null {
  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}
