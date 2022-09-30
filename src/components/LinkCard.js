import React from "react"
import { Link } from "react-router-dom"

const LinkCard = ({ route, description }) => {
  return (
    <li>
      <Link to={route} className="text-center text-xl font-black">
        <div className="bg-emerald-600 text-white w-20 h-20 p-20 flex items-center justify-center hover:bg-emerald-900">
          {description}
        </div>
      </Link>
    </li>
  )
}

export default LinkCard
