import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getDataInfo = createAsyncThunk("api/data", (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      console.log("response", response)
      return response.data
    })
})

const pokeSlice = createSlice({
  name: "pokeData",
  initialState: {
    data: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getDataInfo.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getDataInfo.pending]: (state, action) => {
      state.loading = true
    },
    [getDataInfo.rejected]: (state) => {
      state.loading = false
      state.error = "Some Error occured"
    },
  },
})

export { getDataInfo }

export default pokeSlice.reducer

// name of slice doesn't matter, the name of reducer used in store only is used to mention the state
// here the reducer name is pokeInfo, slice name is pokeData, state value is accessed using pokeInfo
