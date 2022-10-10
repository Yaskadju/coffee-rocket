import { Payment } from "../Payment"
import * as C from "./styles"
import { MapPinLine } from "phosphor-react"
import { useForm } from "react-hook-form"

export function Address() {
  const { register, handleSubmit } = useForm()
  return (
    <C.AddressContainer>
      <C.Header>
        <MapPinLine size={22} color="#C47F17" />
        <C.HeaderTitle>
          <p className="title">Endereço de Entrega</p>
          <p className="subtitle">Informe o endereço onde deseja receber seu pedido</p>
        </C.HeaderTitle>
      </C.Header>
      <C.Address>
        <div className="inputContainer">
          <input className="inputAddress" type="text" placeholder="CEP" />
        </div>
        <input className="inputAddress" type="text" placeholder="Rua" />
        <div className="inputContainer">
          <input className="inputAddress number" type="text" placeholder="Número" />
          <input className="inputAddress complement" type="text" placeholder="Complemento" />
        </div>
        <div className="inputContainer">
          <input className="inputAddress" type="text" placeholder="Bairro" />
          <div className="inputContainer">
            <input className="inputAddress city" type="text" placeholder="Cidade" />
            <input className="inputAddress state" type="text" placeholder="UF" />
          </div>
        </div>
      </C.Address>
    </C.AddressContainer>
  )
}
