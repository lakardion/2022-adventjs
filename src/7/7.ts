export function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  // return elements that appear only in one of the three arrays
  const result: Record<string, number> = {};

  for (const r of new Set(a1)) {
    result[r] = result[r] ? result[r] + 1 : 1;
  }
  for (const r of new Set(a2)) {
    result[r] = result[r] ? result[r] + 1 : 1;
  }
  for (const r of new Set(a3)) {
    result[r] = result[r] ? result[r] + 1 : 1;
  }
  return Object.entries(result).flatMap(([k, v]) => {
    if (v < 2) {
      return [k];
    }
    return [];
  });
}
