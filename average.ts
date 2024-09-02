//permet de calculer la moyenne d'un tableau de nombre

export function getAverage(marks: number[]): number {
  const calculNumber: number = marks.length;

  const sum: number = marks.reduce((acc, curr) => acc + curr, 0);

  return Math.floor(sum / calculNumber);
}
