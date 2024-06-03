export function buy2Get1Free(quantity: number, price: number): number {
  return (quantity - Math.floor(quantity / 3)) * price;
}
