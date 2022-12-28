import { mountainCreator } from "../6.1/6.1";

export function createCube(size: number) {
  const space = " ";
  const slash = "/";
  const backSlash = "\\";
  const underscore = "_";

  //we know that each cube gets twice as their size of printed lines. So we could do an plain old for loop?
  const printLines = Array.from({ length: size * 2 });
  const remapped = printLines.map((_, idx) => {
    if (idx <= size - 1) {
      const construct = `${space.repeat(size - (idx + 1))}${mountainCreator(
        2 * idx + 1,
        slash
      )}${(backSlash + underscore).repeat(size)}${backSlash}`;
      return construct;
    }
    return `${space.repeat(idx - size)}${mountainCreator(
      2 * size - 2 * (idx - size),
      backSlash
    )}${(underscore + slash).repeat(size)}`;
  });
  return remapped.join("\n");
}
