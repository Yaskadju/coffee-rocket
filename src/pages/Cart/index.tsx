import { Address } from "../../components/Address"
import { ConfirmOrder } from "../../components/ConfirmOrder"
import { Payment } from "../../components/Payment"
import * as C from "./styles"

export function Cart() {
  return (
    <C.CartContainer>
      <C.AddressAndPaymentSubContainer>
        <p className="headTitle">Complete seu pedido</p>
        <C.AddressAndPayment>
          <Address />
          <Payment />
        </C.AddressAndPayment>
      </C.AddressAndPaymentSubContainer>

      <C.ConfirmOrderSubContainer>
        <p className="headTitle">Cafés selecionados</p>
        <ConfirmOrder />
      </C.ConfirmOrderSubContainer>
    </C.CartContainer>
  )
}
