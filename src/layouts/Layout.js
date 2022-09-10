import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
