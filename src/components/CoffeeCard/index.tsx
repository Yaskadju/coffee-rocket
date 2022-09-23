import * as C from "./styles"
import { ShoppingCart } from "phosphor-react"

import { Plus, Minus } from "phosphor-react"

interface CoffeeProps {
  image: string
  name: string
  price?: number
  description: string
  label: [string]
  priceFormatted: string
}

export function CoffeeCard(props: CoffeeProps) {
  return (
    <C.Card>
      <img src={props.image} alt="" />
      <div className="labels">
        {props.label.map(label => {
          return <span className="label">{label}</span>
        })}
      </div>
      <div className="info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="checkout">
        <div className="price">
          R$ <span className="priceNumber">9,90</span>
        </div>
        <div className="cart">
          <div className="number">
            <Minus size={20} color="#7b40c4" weight="bold" />1<Plus size={20} color="#7b40c4" weight="bold" />
          </div>
          <div className="cartIcon">
            <ShoppingCart size={22} color="#FFFFFF" weight="fill" />
          </div>
        </div>
      </div>
    </C.Card>
  )
}
