import * as C from "./styles"
import { MapPinLine } from "phosphor-react"
import { useFormContext } from "react-hook-form"

type AddressProps = {}

type FormInputs = {
  cep: string
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  state: string
}

export function Address() {
  const {
    register,
    setError,
    formState: { errors }
  } = useFormContext<FormInputs>()

  console.log({ errors })

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
        <C.InputContainer>
          <input
            className="inputAddress"
            type="text"
            placeholder="CEP"
            {...register("cep", { required: "This is required." })}
          />
        </C.InputContainer>
        {errors.cep && <p className="error">{errors.cep.message}</p>}
        <input
          className="inputAddress"
          type="text"
          placeholder="Rua"
          {...register("street", { required: "This is required." })}
        />
        {errors.street && <p className="error">{errors.street.message}</p>}
        <C.InputContainer>
          <input
            className="inputAddress number"
            type="text"
            placeholder="Número"
            {...register("number", { valueAsNumber: true })}
          />
          <input
            className="inputAddress complement"
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </C.InputContainer>
        {errors.number && <p className="error">{errors.number.message}</p>}
        <C.InputContainer>
          <input
            className="inputAddress"
            type="text"
            placeholder="Bairro"
            {...register("neighborhood", { required: "This is required." })}
          />
          <C.InputContainer>
            <input
              className="inputAddress city"
              type="text"
              placeholder="Cidade"
              {...register("city", { required: "This is required." })}
            />
            <input
              className="inputAddress state"
              type="text"
              placeholder="UF"
              {...register("state", { required: "This is required." })}
            />
          </C.InputContainer>
        </C.InputContainer>
        {errors.neighborhood && <p className="error">{errors.neighborhood.message}</p>}
        {errors.city && <p className="error">{errors.city.message}</p>}
        {errors.state && <p className="error">{errors.state.message}</p>}
      </C.Address>
    </C.AddressContainer>
  )
}
