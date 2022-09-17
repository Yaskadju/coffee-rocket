import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import * as C from "./styles"

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <Header />
      <Outlet />
    </C.LayoutContainer>
  )
}
