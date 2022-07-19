import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataInfo } from "../redux/pokeReducer";

const PokeMon = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokeInfo.data);
  console.log("data", data);

  useEffect(() => {
    dispatch(getDataInfo(Math.floor(Math.random() * 21)));
  }, [dispatch]);

  return (
    <div>
      <h3>Hello from Pokemon!</h3>
      <p>{data.species ? data.species.name : "No data"}</p>
      <img
        src={data.sprites ? data.sprites.front_shiny : ""}
        alt={data.species ? data.species.name : "Nothing to show"}
      />
    </div>
  );
};

export default PokeMon;

//       <p>{data.species.name || "No data"}</p>
//<img src={data.sprites.front_shiny} alt={data.species.name} />
