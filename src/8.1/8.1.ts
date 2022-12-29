export const checkEvenPalindrome = (str: string) => {
  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (i >= str.length / 2) {
      const popped = stack.pop();
      if (popped !== str[i]) return false;
      continue;
    }
    stack.push(str[i]);
  }
  return true;
};

export const checkAnyPalindrome = (str: string) => {
  if (str.length === 1) return true;
  const stack: string[] = [];
  const center = str.length % 2 !== 0 ? Math.floor(str.length / 2) : undefined;
  for (let i = 0; i < str.length; i++) {
    if (i === center) continue;
    if (i >= str.length / 2) {
      const popped = stack.pop();
      if (popped !== str[i]) return false;
      continue;
    }
    stack.push(str[i]);
  }
  return true;
};

type CharacterAnalysisResult = {
  charAnalysis: Record<string, { count: number; indexes: number[] }>;
  center?: string;
};
/**
 * Get whether the word is a palindrome or not. If it is not a palindrome, we want to take advantage of the loop to analyze the word altogether so that we an use that information to solve the challenge
 * @param str word to check
 * @returns
 */
export const checkAndAnalyzePalindrome = (
  str: string
): true | CharacterAnalysisResult => {
  if (str.length === 1) return true;
  const stack: string[] = [];
  const result: CharacterAnalysisResult = {
    charAnalysis: {},
    center: undefined,
  };
  const safeAddToAnalysis = (val: string, index: number) => {
    if (!result.charAnalysis[val]) {
      result.charAnalysis[val] = {
        count: 1,
        indexes: [index],
      };
      return;
    }
    result.charAnalysis[val].count++;
    result.charAnalysis[val].indexes.push(index);
  };
  let hasFailedAsPalindrome = false;
  const center = str.length % 2 !== 0 ? Math.floor(str.length / 2) : undefined;
  for (let i = 0; i < str.length; i++) {
    if (i === center) {
      result.center = str[center];
      safeAddToAnalysis(str[center], center);
      continue;
    }
    if (i >= str.length / 2) {
      const popped = stack.pop();
      if (popped !== str[i]) hasFailedAsPalindrome = true;
      safeAddToAnalysis(str[i], i);
      continue;
    }
    !hasFailedAsPalindrome && stack.push(str[i]);
    safeAddToAnalysis(str[i], i);
  }
  return hasFailedAsPalindrome ? result : true;
};
