//permet de générer un tableau de nombres de 'startNum' à 'endNum' en excluant 'endNum'

//const resultat = range(2, 6);
//console.log(resultat);  Sortie : [3, 4, 5]

export function range(startNum: number, endNum: number): number[] {
  let arr: number[] = [];

  while (startNum < endNum - 1) {
    startNum++;
    arr.push(startNum);
  }

  return arr;
}
