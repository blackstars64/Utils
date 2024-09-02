//permet de multiplier chaque élément d'un tableau par un nombre donné
// const test = [1, 2, 3, 4];
//multiplyAll(test) Sortie : [3, 6, 9, 12] il mutiplie chaque élément par 3

export function multiplyAll(arr: number[]): (num: number) => number[] {
  return function (num: number): number[] {
    return arr.map((element) => element * num);
  };
}
