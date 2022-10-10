import * as C from "./styles"
import { Plus, Minus, Trash } from "phosphor-react"

export function ConfirmOrder() {
  return (
    <C.ConfirmationContainer>
      <C.CoffeeItem>
        <img src="https://i.ibb.co/B2kbcMs/expresso.png" alt="" />
        <div className="info">
          <span>Expresso Tradicional</span>
          <div className="buttons">
            <div className="number">
              <Minus size={16} color="#7b40c4" weight="bold" />1<Plus size={16} color="#7b40c4" weight="bold" />
            </div>
            <div className="remove">
              <Trash size={16} color="#7b40c4" />
              <span>REMOVER</span>
            </div>
          </div>
        </div>
        <span className="price">R$ 9,90</span>
      </C.CoffeeItem>
      <C.FinishOrder>
        <div className="boxPrice">
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className="boxPrice">
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div className="boxPrice total">
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </C.FinishOrder>
      <C.ConfirmOrderButton>CONFIRMAR PEDIDO</C.ConfirmOrderButton>
    </C.ConfirmationContainer>
  )
}
