//permet de vérifier si tous les éléments d'un tableau de nombres sont inférieurs ou égaux à une limite donnée

export function smallEnough(a: number[], limit: number): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}
