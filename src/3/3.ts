/**
 *
 * @param packOfGifts list of gifts names, each name length also represent the weight of the package.
 * @param reindeers list of reindeers names, each reindeer can carry up to the double of their name length
 * @returns
 */
export function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  if (!packOfGifts.length) return 0;
  if (!reindeers.length) return 0;
  const pkgCapacity = packOfGifts.reduce((res, curr) => {
    return res + curr.length;
  }, 0);
  const reindeersCapacity = reindeers.reduce((res, curr) => {
    return res + curr.length * 2;
  }, 0);
  return Math.floor(reindeersCapacity / pkgCapacity);
}
