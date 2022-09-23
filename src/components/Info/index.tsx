import * as C from "./styles"
import coffeeInfo from "../../assets/coffee.svg"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"

export function Info() {
  return (
    <C.InfoContainer>
      <C.InfoBox>
        <C.InfoText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </C.InfoText>
        <C.InfoIcons>
          <C.IconAndText>
            <C.Icon background="yellow-dark">
              <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
            </C.Icon>
            <label>Compra simples e segura</label>
          </C.IconAndText>

          <C.IconAndText>
            <C.Icon background="base-text">
              <Package size={16} color="#FFFFFF" weight="fill" />
            </C.Icon>
            <label>Embalagem mantém o café intacto</label>
          </C.IconAndText>

          <C.IconAndText>
            <C.Icon background="yellow">
              <Timer size={16} color="#FFFFFF" weight="fill" />
            </C.Icon>
            <label>Entrega rápida e rastreada</label>
          </C.IconAndText>

          <C.IconAndText>
            <C.Icon background="purple">
              <Coffee size={16} color="#FFFFFF" weight="fill" />
            </C.Icon>
            <label>O café chega fresquinho até você</label>
          </C.IconAndText>
        </C.InfoIcons>
      </C.InfoBox>
      <C.Image>
        <img src={coffeeInfo} alt="" />
      </C.Image>
    </C.InfoContainer>
  )
}
