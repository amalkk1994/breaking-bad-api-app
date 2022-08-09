import { useEffect, useState } from "react"
import Character from "../components/Character"
import { fetchUpdateDataFromLocalStorage } from "../utilities/functionalAPIs"
import axios from "axios"

const DailyCharacters = () => {
  const [apiData, setApiData] = useState("")

  useEffect(() => {
    let id = fetchUpdateDataFromLocalStorage("BBChar", 115)
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then((response) => {
        console.log("charAPI", response.data)
        setApiData(response.data)
      })
  }, [])

  return (
    <div>
      <Character data={apiData} />
    </div>
  )
}

export default DailyCharacters
