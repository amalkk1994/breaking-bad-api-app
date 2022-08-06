import Container from "../components/Container"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h2>This is the common layout</h2>
      <Container />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
