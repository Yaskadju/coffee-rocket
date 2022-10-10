import * as C from "./styles"
import { CurrencyDollar } from "phosphor-react"
import { CreditCard } from "phosphor-react"
import { Bank } from "phosphor-react"
import { Money } from "phosphor-react"

export function Payment() {
  return (
    <C.PaymentContainer>
      <C.Header>
        <CurrencyDollar size={22} color="#8047F8" />
        <C.HeaderTitle>
          <p className="title">Pagamento</p>
          <p className="subtitle">O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
        </C.HeaderTitle>
      </C.Header>
      <C.PaymentButtonContainer>
        <C.PaymentButton>
          <CreditCard size={16} color="#7b40c4" />
          <span>CARTÃO DE CRÉDITO</span>
        </C.PaymentButton>
        <C.PaymentButton>
          <Bank size={16} color="#7b40c4" />
          <span>CARTÃO DE DÉBITO</span>
        </C.PaymentButton>
        <C.PaymentButton>
          <Money size={16} color="#7b40c4" />
          <span>DINHEIRO</span>
        </C.PaymentButton>
      </C.PaymentButtonContainer>
    </C.PaymentContainer>
  )
}
