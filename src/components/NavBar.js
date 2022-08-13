import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-emerald-600 h-20 flex flex-row items-center">
      <Link to="/">
        <h1 className="text-white text-4xl ml-10 font-black">Breaking Bad</h1>
      </Link>
    </nav>
  )
}

export default NavBar
