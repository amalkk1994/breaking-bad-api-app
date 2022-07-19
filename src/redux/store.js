import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokeReducer";

const store = configureStore({
  reducer: {
    pokeInfo: pokeReducer,
  },
});

export default store;
