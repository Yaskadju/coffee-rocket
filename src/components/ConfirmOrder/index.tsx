import * as C from "./styles"
import { Plus, Minus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { formatPrice } from "../../util/util"
import { useFormContext } from "react-hook-form"

export function ConfirmOrder() {
  const { removeCoffee, cart, updateCoffeeAmount } = useContext(CartContext)
  const { handleSubmit, reset } = useFormContext()

  const tax = formatPrice(3.5)

  const cartFormatted = cart.map(coffee => {
    let priceFormatted = formatPrice(Number(coffee.price))
    let subTotal = formatPrice(Number(coffee.price) * coffee.amount)

    return {
      ...coffee,
      priceFormatted,
      subTotal
    }
  })

  const total = formatPrice(
    cart.reduce((sumTotal, coffee) => {
      return sumTotal + Number(coffee.price) * coffee.amount
    }, 0)
  )

  function handleRemove(id: number) {
    console.log(id)
    removeCoffee(id)
  }

  function handleIncrement(id: number) {
    updateCoffeeAmount({
      coffeeId: id,
      quantity: +1
    })
  }

  function handleDecrement(id: number) {
    updateCoffeeAmount({
      coffeeId: id,
      quantity: -1
    })
  }

  function handleSendAddress(data: any) {
    console.log("hello")
  }

  // const onSubmit = (data: any) => console.log(data)

  return (
    <C.ConfirmationContainer>
      {cartFormatted &&
        cartFormatted.map(coffee => {
          return (
            <C.CoffeeItem key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div className="info">
                <span>{coffee.name}</span>
                <div className="buttons">
                  <div className="number">
                    <Minus
                      size={16}
                      color="#7b40c4"
                      weight="bold"
                      onClick={() => handleDecrement(coffee.id)}
                    />
                    {coffee.amount}
                    <Plus
                      size={16}
                      color="#7b40c4"
                      weight="bold"
                      onClick={() => handleIncrement(coffee.id)}
                    />
                  </div>
                  <div className="remove" onClick={() => handleRemove(coffee.id)}>
                    <Trash size={16} color="#7b40c4" />
                    <span>REMOVER</span>
                  </div>
                </div>
              </div>
              <span className="price">R$ {coffee.priceFormatted}</span>
            </C.CoffeeItem>
          )
        })}

      <C.FinishOrder>
        <div className="boxPrice">
          <span>Total de itens</span>
          <span>R$ {total}</span>
        </div>
        <div className="boxPrice">
          <span>Entrega</span>
          <span>R$ {tax}</span>
        </div>
        <div className="boxPrice total">
          <span>Total</span>
          <span>R$ {total}</span>
        </div>
      </C.FinishOrder>
      <C.ConfirmOrderButton>CONFIRMAR PEDIDO</C.ConfirmOrderButton>
    </C.ConfirmationContainer>
  )
}
