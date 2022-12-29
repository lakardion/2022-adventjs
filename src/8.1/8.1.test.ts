import { describe, it, expect } from "vitest";
import {
  checkAndAnalyzePalindrome,
  checkAnyPalindrome,
  checkEvenPalindrome,
} from "./8.1";

describe("palindromes", () => {
  it("checks even palindromes", () => {
    expect(checkEvenPalindrome("uwuuwu")).toEqual(true);
    expect(checkEvenPalindrome("uw")).toEqual(false);
    expect(checkEvenPalindrome("123321")).toEqual(true);
    expect(checkEvenPalindrome("aaaa")).toEqual(true);
  });
  it("checks any palindrome", () => {
    // previous should still pass
    expect(checkAnyPalindrome("uwuuwu")).toEqual(true);
    expect(checkAnyPalindrome("uw")).toEqual(false);
    expect(checkAnyPalindrome("123321")).toEqual(true);
    expect(checkAnyPalindrome("aaaa")).toEqual(true);
    // try some odd ones
    expect(checkAnyPalindrome("lakakal")).toEqual(true);
    expect(checkAnyPalindrome("bb")).toEqual(true);
    expect(checkAnyPalindrome("lakardion")).toEqual(false);
    expect(checkAnyPalindrome("la")).toEqual(false);
    expect(checkAnyPalindrome("albatrosortabla")).toEqual(true);
    expect(checkAnyPalindrome("ioWoi")).toEqual(true);
  });

  it("checks any palindrome and analyses if false", () => {
    // previous should still pass
    expect(checkAndAnalyzePalindrome("uwuuwu")).toEqual(true);
    expect(checkAndAnalyzePalindrome("uw")).toEqual({
      charAnalysis: {
        u: { count: 1, indexes: [0] },
        w: { count: 1, indexes: [1] },
      },
      center: undefined,
    });
    expect(checkAndAnalyzePalindrome("123321")).toEqual(true);
    expect(checkAndAnalyzePalindrome("aaaa")).toEqual(true);
    // try some odd ones
    expect(checkAndAnalyzePalindrome("lakakal")).toEqual(true);
    expect(checkAndAnalyzePalindrome("bb")).toEqual(true);
    const lakardion = checkAndAnalyzePalindrome("lakardion");
    expect(lakardion).toEqual({
      charAnalysis: {
        l: { count: 1, indexes: [0] },
        a: { count: 2, indexes: [1, 3] },
        k: { count: 1, indexes: [2] },
        r: { count: 1, indexes: [4] },
        d: { count: 1, indexes: [5] },
        i: { count: 1, indexes: [6] },
        o: { count: 1, indexes: [7] },
        n: { count: 1, indexes: [8] },
      },
      center: "r",
    });
    expect(checkAndAnalyzePalindrome("la")).toEqual({
      charAnalysis: {
        l: { count: 1, indexes: [0] },
        a: { count: 1, indexes: [1] },
      },
      center: undefined,
    });
    expect(checkAndAnalyzePalindrome("albatrosortabla")).toEqual(true);
    expect(checkAndAnalyzePalindrome("midu")).toEqual({
      charAnalysis: {
        m: {
          count: 1,
          indexes: [0],
        },
        i: {
          count: 1,
          indexes: [1],
        },
        d: {
          count: 1,
          indexes: [2],
        },
        u: {
          count: 1,
          indexes: [3],
        },
      },
      center: undefined,
    });
  });
});
