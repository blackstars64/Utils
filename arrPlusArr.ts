export function arrPlusArr(arr1: number[], arr2: number[]): number {
  let arr: number[] = [...arr1, ...arr2];
  return arr.reduce((acc, curr) => acc + curr);
}
