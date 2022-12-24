import { describe, it, expect } from "vitest";
import { fitsInOneBox } from "./4";

describe("Box inside a box and another", () => {
  it("fails to fit multiple boxes properly", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ];

    const fits = fitsInOneBox(boxes); // false
    expect(fits).toEqual(false);
  });
  it("fits multiple boxes properly 1", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ];

    const fits = fitsInOneBox(boxes);
    expect(fits).toEqual(true);
  });
  it("fits multiple boxes properly 2", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ];
    const fits = fitsInOneBox(boxes);
    expect(fits).toEqual(true);
  });
});
