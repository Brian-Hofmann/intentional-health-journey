export function isDonation(price: string): boolean {
  const convPrice = Number.parseFloat(price);
  return convPrice <= 0;
}
