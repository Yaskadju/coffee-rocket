import * as C from "./styles"
import { CurrencyDollar } from "phosphor-react"
import { CreditCard } from "phosphor-react"
import { Bank } from "phosphor-react"
import { Money } from "phosphor-react"
import { useState } from "react"

interface PaymentProps {
  changePaymentType: (paymentForm: string) => void
}

export function Payment({ changePaymentType }: PaymentProps) {
  const [type, setType] = useState("")

  function handleSetPayment(event: any, paymentForm: string) {
    event.preventDefault()
    console.log({ paymentForm })

    if (paymentForm) {
      changePaymentType(paymentForm)
      setType(paymentForm)
    }
  }

  return (
    <C.PaymentContainer>
      <C.Header>
        <CurrencyDollar size={22} color="#8047F8" />
        <C.HeaderTitle>
          <p className="title">Pagamento</p>
          <p className="subtitle">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </C.HeaderTitle>
      </C.Header>
      <C.PaymentButtonContainer>
        <C.PaymentButton
          isActive={type === "credit"}
          onClick={event => handleSetPayment(event, "credit")}>
          <CreditCard size={16} color="#7b40c4" />

          <label htmlFor="credit">CARTÃO DE CRÉDITO</label>
        </C.PaymentButton>
        <C.PaymentButton
          isActive={type === "debit"}
          onClick={event => handleSetPayment(event, "debit")}>
          <Bank size={16} color="#7b40c4" />

          <label htmlFor="debit">CARTÃO DE DÉBITO</label>
        </C.PaymentButton>
        <C.PaymentButton
          isActive={type === "money"}
          onClick={event => handleSetPayment(event, "money")}>
          <Money size={16} color="#7b40c4" />

          <label htmlFor="money">DINHEIRO</label>
        </C.PaymentButton>
      </C.PaymentButtonContainer>
    </C.PaymentContainer>
  )
}
