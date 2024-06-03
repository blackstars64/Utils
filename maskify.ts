//transforme tous les caractères, sauf les quatre derniers, en « # ».

export function maskify(str: string): string {
  if (str.length <= 4) {
    return str;
  }

  const maskedString = str.slice(0, -4).replace(/./g, "#") + str.slice(-4);

  return maskedString;
}
