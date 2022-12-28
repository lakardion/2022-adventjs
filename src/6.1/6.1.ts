const slash = "/";
const backSlash = "\\";

export const mountainCreator = (
  n: number,
  starter: typeof slash | typeof backSlash
) => {
  const starterOpposite = starter === slash ? backSlash : slash;
  return Array.from({ length: n }).reduce((res, _, idx) => {
    if (idx === 0) {
      res = starter;
      return res;
    }
    res += idx % 2 === 0 ? starter : starterOpposite;
    return res;
  }, "");
};
