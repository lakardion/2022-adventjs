import { checkAndAnalyzePalindrome, checkAnyPalindrome } from "../8.1/8.1";

export function checkPart(part: string) {
  const result = checkAndAnalyzePalindrome(part);
  if (result === true) return true;
  const removeCandidates = Object.entries(result.charAnalysis).flatMap(
    ([k, v]) => {
      if (v.count % 2 !== 0) return { value: k, analysys: v };
      return [];
    }
  );
  for (const candidate of removeCandidates) {
    for (const idx of candidate.analysys.indexes) {
      const palindromeCandidate = part.slice(0, idx) + part.slice(idx + 1);
      const isPalindrome = checkAnyPalindrome(palindromeCandidate);
      if (isPalindrome) return true;
    }
  }
  return false;
}
