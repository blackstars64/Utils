//permet de retourner le nom de domaine d'une url

export function domainName(url: string): string {
  // enlever le protocole http ou https
  url = url.replace(/^https?:\/\//, "");

  // enlever le www
  url = url.replace(/^www\./, "");

  // retourner le nom de domaine jusqu'au premier point
  return url.split(".")[0];
}
