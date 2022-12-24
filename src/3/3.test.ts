import { describe, expect, it } from "vitest";
import { distributeGifts } from "./3";

describe("How many packs of gifts can Santa Carry?", () => {
  it("Calculates how many gifts Santa can carry", () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];

    // pack weights 4 + 4 + 4 = 12
    // reindeers can carry (2 * 6) + (2 * 6) = 24
    const gifts = distributeGifts(packOfGifts, reindeers); // 2
    expect(gifts).toEqual(2);
  });
});
