import { useEffect, useState } from "react"
import { CoffeeCard } from "../../components/CoffeeCard"
import { Info } from "../../components/Info"
import { api } from "../../services/api"
import { formatPrice } from "../../util/util"
import * as C from "./styles"

interface Coffee {
  id: number
  name: string
  type: [string]
  price: number
  image: string
  description: string
}

interface CoffeeFormatted extends Coffee {
  priceFormatted: string
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeFormatted[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get<Coffee[]>("coffees")

      console.log(response)

      const data = response.data.map(coffee => {
        return { ...coffee, priceFormatted: formatPrice(coffee.price) }
      })

      setCoffees(data)
    }
    loadCoffees()
  }, [])

  return (
    <C.HomeContainer>
      <Info />
      <h1 className="title">Nossos Cafés</h1>

      <C.Cards>
        {coffees &&
          coffees.map((coffee, index) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              name={coffee.name}
              priceFormatted={coffee.priceFormatted}
              description={coffee.description}
              label={coffee.type}
            />
          ))}
      </C.Cards>
    </C.HomeContainer>
  )
}
