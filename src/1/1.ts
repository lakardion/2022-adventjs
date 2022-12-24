export const wrapping = (gifts: string[]) => {
  return gifts.map((g) => {
    const wordLength = g.length;
    const totalPaper = wordLength + 2;
    return `${"*".repeat(totalPaper)}\n*${g}*\n${"*".repeat(totalPaper)}`;
  });
};
