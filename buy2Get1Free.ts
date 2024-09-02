//permet de calculer le prix total d'un produit en appliquant une promotion de type "achetez-en 2, obtenez-en 1 gratuit"

export function buy2Get1Free(quantity: number, price: number): number {
  return (quantity - Math.floor(quantity / 3)) * price;
}
