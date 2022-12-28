import { describe, expect, it } from "vitest";
import { createCube } from "./6";

describe("Creating xmas decorations", () => {
  it("creates a 3x3 cube", () => {
    const cube = createCube(3);
    const cubeStr =
      "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/";
    expect(cube).toEqual(cubeStr);
  });
  it("creates a 1x1 cube", () => {
    const cube = createCube(1);
    const cubeStr = "/\\_\\\n\\/_/";
    expect(cube).toEqual(cubeStr);
  });
  it("creates a 2x2 cube", () => {
    const cube = createCube(2);
    const cubeStr = " /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/";
    expect(cube).toEqual(cubeStr);
  });
});
