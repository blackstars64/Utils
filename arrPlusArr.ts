//permet de concaténer deux tableaux de nombres et de retourner la somme de tous les éléments

export function arrPlusArr(arr1: number[], arr2: number[]): number {
  let arr: number[] = [...arr1, ...arr2];
  return arr.reduce((acc, curr) => acc + curr);
}
