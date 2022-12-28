export function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  // return elements that appear only in one of the three arrays
  const result: Record<string, number> = {};
  const storeInfo: {
    a1: Record<string, string>;
    a2: Record<string, string>;
    a3: Record<string, string>;
  } = { a1: {}, a2: {}, a3: {} };
  for (const r of a1) {
    if (!storeInfo.a1[r]) {
      result[r] = result[r] ? result[r] + 1 : 1;
      storeInfo.a1[r] = r;
    }
  }
  for (const r of a2) {
    if (!storeInfo.a2[r]) {
      result[r] = result[r] ? result[r] + 1 : 1;
      storeInfo.a2[r] = r;
    }
  }
  for (const r of a3) {
    if (!storeInfo.a3[r]) {
      result[r] = result[r] ? result[r] + 1 : 1;
      storeInfo.a3[r] = r;
    }
  }
  return Object.entries(result).flatMap(([k, v]) => {
    if (v < 2) {
      return [k];
    }
    return [];
  });
}
