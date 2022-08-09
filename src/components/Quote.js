import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuote } from "../redux/quoteReducer"
import { fetchUpdateDataFromLocalStorage } from "../utilities/functionalAPIs"

const Quote = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.quote.data)
  const error = useSelector((state) => state.quote.error)
  const loading = useSelector((state) => state.quote.loading)

  useEffect(() => {
    let id = fetchUpdateDataFromLocalStorage("BBQuotes", 102)
    console.log("id", id)
    dispatch(getQuote(id))
  }, [dispatch])

  return (
    <div className="mt-6">
      {!(loading === true || error !== "") && data && data[0] ? (
        <>
          <h1 className="text-5xl font-black text-center mb-4 leading-normal">
            {data[0].quote}
          </h1>
          <p className="text-center text-2xl">{"-" + data[0].author}</p>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  )
}

export default Quote
