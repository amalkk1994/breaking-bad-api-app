import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "../components/SearchBar"
import { getAllCharacters } from "../redux/characterReducer"
import Character from "../components/Character"

const BrowseCharacters = () => {
  const dispatch = useDispatch()
  const [filteredData, setFilteredData] = useState()
  const apiData = useSelector((state) => state.character.data)

  function onChangeHandler(e) {
    const searchText = e.target.value.toLowerCase()
    console.log("searchText", searchText)
    setFilteredData(
      apiData.filter((elt) => {
        return elt.name.toLowerCase().includes(searchText)
      })
    )
  }

  useEffect(() => {
    dispatch(getAllCharacters(setFilteredData))
  }, [dispatch])

  return (
    <div>
      <h2 className="text-2xl font-black m-2">Browse Characters</h2>
      <SearchBar onChange={onChangeHandler} />
      <div>
        <ul className="grid grid-cols-3 gap-10 mt-5">
          {filteredData?.map((elt) => (
            <li key={elt.char_id}>
              <Character data={elt} scale="min-w-max" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BrowseCharacters
