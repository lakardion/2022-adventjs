import { describe, expect, it } from "vitest";
import { mountainCreator } from "./6.1";

describe("test whether we can create mountains", () => {
  it("can create a 4 mountain starting with slash", () => {
    const mountainFour = mountainCreator(4, "/");
    expect(mountainFour).toEqual("/\\/\\");
  });
  it("can create a 4 mountain starting with backslash", () => {
    const mountainFour = mountainCreator(4, "\\");
    expect(mountainFour).toEqual("\\/\\/");
  });
});
