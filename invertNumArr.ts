//permet d'inverser les éléments d'un tableau de nombres de 1 à -1 et de -1 à 1

export function invertNumbArr(arr: number[]): number[] {
  return arr.map((num) => -num);
}
