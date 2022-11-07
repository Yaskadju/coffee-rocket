import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./components/DefaultLayout"
import { Cart } from "./pages/Cart"
import { Conclusion } from "./pages/Conclusion"
import { Home } from "./pages/Home"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Route>
    </Routes>
  )
}
