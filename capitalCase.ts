//pour mettre en capitalCase une chaine de caractères

export function capitalCase(str: string): string {
  if (!str || str.trim().length === 0) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
