export function multiplyAll(arr: number[]): (num: number) => number[] {
  return function (num: number): number[] {
    return arr.map((element) => element * num);
  };
}
