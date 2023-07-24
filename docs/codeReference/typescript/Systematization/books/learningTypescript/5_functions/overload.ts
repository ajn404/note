//函数重载
function createDate(timestamp: number): Date;
function createDate(monthTimesTamp: number, day: number, year: number): Date;
function createDate(monthTimesTamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthTimesTamp)
    : new Date(year, monthTimesTamp, day);
}

createDate(55435680);
createDate(7, 27, 1998);
// createDate(1, 2);
