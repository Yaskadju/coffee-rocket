export function formatPrice(price: number) {
  let formattedPrice = price.toFixed(2).toString().replace(".", ",")
  return formattedPrice
}
