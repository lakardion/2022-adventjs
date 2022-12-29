import { checkAndAnalyzePalindrome, checkAnyPalindrome } from "../8.1/8.1";

export function checkPart(part: string) {
  const result = checkAndAnalyzePalindrome(part);
  if (result === true) return true;

  //this is not just because of evenness, we have to veryfy that all chars are all even as well. it is freaking edge case
  const isOdd = Boolean(result.center);
  const isEdge = Object.entries(result.charAnalysis).every(
    ([k, v]) => v.count % 2 === 0
  );
  const centerCandidates = [
    part[Math.floor(part.length / 2)],
    part[Math.ceil(part.length / 2)],
  ];

  const removeCandidates =
    isOdd || !isEdge
      ? Object.entries(result.charAnalysis).flatMap(([k, v]) => {
          if (v.count % 2 !== 0) return { value: k, analysys: v };
          return [];
        })
      : Object.entries(result.charAnalysis).flatMap(([k, v]) => {
          if (centerCandidates.includes(k)) return { value: k, analysys: v };
          return [];
        });
  // this is only good if we're odd:
  for (const candidate of removeCandidates) {
    for (const idx of candidate.analysys.indexes) {
      const palindromeCandidate = part.slice(0, idx) + part.slice(idx + 1);
      const isPalindrome = checkAnyPalindrome(palindromeCandidate);
      if (isPalindrome) return true;
    }
  }
  return false;
}
