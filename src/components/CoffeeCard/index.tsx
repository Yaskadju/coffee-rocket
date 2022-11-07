import * as C from "./styles"
import { ShoppingCart } from "phosphor-react"

import { Plus, Minus } from "phosphor-react"
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"

interface CoffeeProps {
  id: number
  image: string
  name: string
  price?: number
  description: string
  label: [string]
  priceFormatted: string
}

interface CartItemsAmount {
  [key: number]: number
}

export function CoffeeCard(props: CoffeeProps) {
  const { cart, updateCoffeeAmount, removeCoffee } = useContext(CartContext)

  let cartItemsAmount = cart.reduce((sumAmount, coffee) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[coffee.id] = coffee.amount

    return newSumAmount
  }, {} as CartItemsAmount)

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

  return (
    <C.Card>
      <img src={props.image} alt="" />
      <div className="labels">
        {props.label.map(label => {
          return (
            <span key={label} className="label">
              {label}
            </span>
          )
        })}
      </div>
      <div className="info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="checkout">
        <div className="price">
          R$ <span className="priceNumber">{props.priceFormatted}</span>
        </div>
        <div className="cart">
          <div className="number">
            <Minus
              size={20}
              color="#7b40c4"
              weight="bold"
              onClick={() => handleDecrement(props.id)}
            />
            {cartItemsAmount[props.id] || 0}
            <Plus
              size={20}
              color="#7b40c4"
              weight="bold"
              onClick={() => handleIncrement(props.id)}
            />
          </div>
          <div className="cartIcon">
            <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
          </div>
        </div>
      </div>
    </C.Card>
  )
}
