import { useContext, useState } from "react"
import { Address } from "../../components/Address"
import { ConfirmOrder } from "../../components/ConfirmOrder"
import { Payment } from "../../components/Payment"
import * as C from "./styles"

import zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CartContext } from "../../contexts/CartContext"

const addressSchema = zod.object({
  cep: zod.string().length(7, "O cep deve conter 7 digitos"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.number().min(1, "Informe o número"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  state: zod.string().min(1, "Informe o Estado")
})

export type AddressData = zod.infer<typeof addressSchema>

export function Cart() {
  const { cart } = useContext(CartContext)
  const [paymentError, setPaymentError] = useState("")
  const [paymentType, setPaymentType] = useState("")

  const addressForm = useForm<AddressData>({
    resolver: zodResolver(addressSchema.required()),
    defaultValues: {
      cep: "",
      street: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      number: undefined
    }
  })

  const { handleSubmit, reset } = addressForm

  function changePaymentType(paymentForm: string) {
    setPaymentType(paymentForm)
  }

  function handleSendForm(data: AddressData) {
    console.log("hello")

    if (paymentType == "") {
      setPaymentError("Escolha a forma de pagamento")
      return
    }

    let order = {
      cart: cart,
      address: data,
      payment: paymentType
    }

    console.log({ order })
    reset()
  }

  return (
    <C.CartContainer onSubmit={handleSubmit(handleSendForm)}>
      <FormProvider {...addressForm}>
        <C.AddressAndPaymentSubContainer>
          <p className="headTitle">Complete seu pedido</p>
          <C.AddressAndPayment>
            <Address />
            <Payment changePaymentType={changePaymentType} />
            {paymentError}
          </C.AddressAndPayment>
        </C.AddressAndPaymentSubContainer>

        <C.ConfirmOrderSubContainer>
          <p className="headTitle">Cafés selecionados</p>
          <ConfirmOrder />
        </C.ConfirmOrderSubContainer>
      </FormProvider>
    </C.CartContainer>
  )
}
