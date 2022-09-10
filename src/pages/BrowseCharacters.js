import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "../components/SearchBar"
import { getAllCharacters } from "../redux/characterReducer"
import Character from "../components/Character"

const BrowseCharacters = () => {
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.character.data)

  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch])

  return (
    <div>
      <h2 className="text-2xl font-black m-2">Browse Characters</h2>
      <SearchBar />
      <div>
        <ul className="grid grid-cols-3 gap-10">
          {apiData?.map((elt) => (
            <li key={elt.char_id}>
              <Character data={elt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseCharacters
