import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./pokeReducer";
import quoteReducer from "./quoteReducer";

const store = configureStore({
  reducer: {
    pokeInfo: pokeReducer,
    quote: quoteReducer,
  },
});

export default store;
