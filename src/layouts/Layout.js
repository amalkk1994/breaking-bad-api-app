import Container from "../components/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Container />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
