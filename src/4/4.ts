type Box = { l: number; w: number; h: number };
export function fitsInOneBox(boxes: Box[]) {
  if (!boxes.length) return true;
  const sortByVolumeAsc = (a: Box, b: Box) =>
    a.h * a.l * a.w > b.h * b.w * b.l ? -1 : 1;
  const fitsWithin = (a: Box) => (b: Box) => {
    return b.h < a.h && b.l < a.l && b.w < a.w;
  };
  const boxesCopy = [...boxes];
  boxesCopy.sort(sortByVolumeAsc);
  for (const [idx, b] of boxesCopy.entries()) {
    if (idx === boxesCopy.length - 1) {
      return true;
    }
    if (!fitsWithin(b)(boxesCopy[idx + 1])) return false;
  }
  return true;
}
