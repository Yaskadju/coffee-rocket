import * as C from "./styles"
import coffeeLogo from "../../assets/coffeeLogo.svg"
import { NavLink } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Header() {
  const { cart } = useContext(CartContext)

  console.log(cart.length)
  return (
    <C.HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <nav>
        <C.Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <p>São Paulo, SP</p>
        </C.Location>
        <NavLink className="cart" to="/cart" title="Carrinho">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          {cart.length > 0 && <div className="cartNumber">{cart.length}</div>}
        </NavLink>
      </nav>
    </C.HeaderContainer>
  )
}
