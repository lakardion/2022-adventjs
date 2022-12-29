import { describe, it, expect } from "vitest";
import { checkPart } from "./8";

describe("We need a mechanic", () => {
  it("checks uwu", () => {
    expect(checkPart("uwu")).toEqual(true); // true
    // "uwu" is a palindrome without removing any character
  });
  it("checks miidim", () => {
    expect(checkPart("miidim")).toEqual(true); // true
    // "miidim" can be a palindrome after removing the first "i"
  });
  it("checks midu", () => {
    expect(checkPart("midu")).toEqual(false); // false
    // "midu" cannot be a palindrome after removing a character
  });
  it("checks a long word that can be turned into palindrome", () => {
    expect(checkPart("palindromeemeemordnilap")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome", () => {
    // d exceeds index 11 or 12
    console.log("length", "lakardionoiddrakal".length);
    expect(checkPart("lakardionoiddrakal")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome 2", () => {
    // r exceeds index 10
    expect(checkPart("lakardionoridrakal")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome 3", () => {
    // r exceeds index 10
    expect(checkPart("bigbrotherstasatsrehktorbgib")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome 4", () => {
    // r exceeds index 10
    expect(checkPart("telefeeltrecemartiritramecjertleefelet")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome 5", () => {
    // r exceeds index 10
    expect(checkPart("bigbrotherstasatsrehktorbgib")).toEqual(true); // false
  });

  it("checks a long random word that can be turned into palindrome 6", () => {
    // s exceeds index 4
    expect(checkPart("fesesf")).toEqual(true); // false
  });
});
