import { describe, it, expect } from "vitest";
import { wrapping } from "./1";

describe("Automating Christmas gift wrapping", () => {
  it("wraps gifts properly", () => {
    //arrange
    const gifts = ["cat", "game", "socks"];
    //act
    const wrapped = wrapping(gifts);
    //assert
    expect(wrapped).toHaveLength(gifts.length);
    expect(wrapped).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });
});
