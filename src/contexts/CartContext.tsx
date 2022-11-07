import { createContext, ReactNode, useEffect, useRef, useState } from "react"
import { api } from "../services/api"

export interface Coffee {
  id: number
  name: string
  type: string
  price: string
  image: string
  description: string
  amount: number
}

interface UpdatedCoffeeAmount {
  coffeeId: number
  quantity: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[]
  updateCoffeeAmount: ({ coffeeId, quantity }: UpdatedCoffeeAmount) => void
  removeCoffee: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storageCart = localStorage.getItem("@rocketCoffee:cart")

    if (storageCart) {
      return JSON.parse(storageCart)
    }

    return []
  })

  const prevCartRef = useRef<Coffee[]>()

  useEffect(() => {
    prevCartRef.current = cart
  })

  const cartPreviousValue = prevCartRef.current ?? cart

  useEffect(() => {
    if (cartPreviousValue != cart) {
      localStorage.setItem("@rocketCoffee:cart", JSON.stringify(cart))
    }
  }, [cart, cartPreviousValue])

  async function updateCoffeeAmount({ coffeeId, quantity }: UpdatedCoffeeAmount) {
    try {
      let updatedCart = [...cart]
      let coffeeExists = cart.find(coffee => coffee.id === coffeeId)
      let productAmount = coffeeExists ? coffeeExists.amount : 0

      if (productAmount + quantity < 0) {
        return
      }

      if (productAmount + quantity == 0) {
        removeCoffee(coffeeId)
        return
      }

      if (coffeeExists) {
        coffeeExists.amount = productAmount + quantity
      } else {
        const { data: coffeeData } = await api.get<Coffee>(`coffees/${coffeeId}`)
        const newCoffee = { ...coffeeData, amount: 1 }
        updatedCart.push(newCoffee)
      }

      setCart(updatedCart)
    } catch (error) {
      console.log(error)
    }
  }

  function removeCoffee(id: number) {
    try {
      const updatedCart = [...cart]
      const coffeeIndex = updatedCart.findIndex(coffee => coffee.id === id)

      if (coffeeIndex >= 0) {
        updatedCart.splice(coffeeIndex, 1)
        setCart(updatedCart)
      } else {
        throw Error()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log({ cart })
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, updateCoffeeAmount, removeCoffee }}>
      {children}
    </CartContext.Provider>
  )
}
