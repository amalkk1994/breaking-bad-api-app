import { configureStore } from "@reduxjs/toolkit"
import pokeReducer from "./pokeReducer"
import quoteReducer from "./quoteReducer"
import characterReducer from "./characterReducer"

const store = configureStore({
  reducer: {
    pokeInfo: pokeReducer,
    quote: quoteReducer,
    character: characterReducer,
  },
})

export default store
