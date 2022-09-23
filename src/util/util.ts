export function formatPrice(price: number) {
  let formattedPrice = price.toString().replace(".", ",")

  // console.log(formattedPrice.split(","))

  return formattedPrice
}
