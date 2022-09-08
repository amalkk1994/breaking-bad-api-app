import { useEffect } from "react"
import Character from "../components/Character"
import { fetchUpdateDataFromLocalStorage } from "../utilities/functionalAPIs"
import { useDispatch, useSelector } from "react-redux"
import { getCharacter } from "../redux/characterReducer"

//import axios from "axios"

const DailyCharacters = () => {
  // const [apiData, setApiData] = useState("")
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.character.data)
  //const error = useSelector((state) => state.character.error)
  // const loading = useSelector((state) => state.character.loading)

  useEffect(() => {
    let id = fetchUpdateDataFromLocalStorage("BBChar", 115)
    dispatch(getCharacter(id))
  }, [dispatch])

  return (
    <div>
      <Character data={apiData[0]} />
    </div>
  )
}

export default DailyCharacters
