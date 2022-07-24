import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../redux/quoteReducer";
import { fetchUpdateDataFromLocalStorage } from "../utilities/functionalAPIs";

const Quote = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quote.data);
  const error = useSelector((state) => state.quote.error);
  const loading = useSelector((state) => state.quote.loading);

  console.log(data);

  useEffect(() => {
    dispatch(getQuote(fetchUpdateDataFromLocalStorage("BBQuotes", 102)));
  }, [dispatch]);

  return (
    <div>
      {!(loading === true || error !== "") && data[0] ? (
        <>
          <h1>{data[0].quote}</h1>
          <p>{"-" + data[0].author}</p>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Quote;
