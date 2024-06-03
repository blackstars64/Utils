export function range(startNum: number, endNum: number): number[] {
  let arr: number[] = [];

  while (startNum < endNum - 1) {
    startNum++;
    arr.push(startNum);
  }

  return arr;
}
