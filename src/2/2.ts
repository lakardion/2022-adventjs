export function countHours(year: number, holidays: string[]) {
  return holidays.reduce((res, curr) => {
    const [month, day] = curr.split("/");
    const date = new Date(year, parseInt(month) - 1, parseInt(day));
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return res;
    }
    return res + 2;
  }, 0);
}
