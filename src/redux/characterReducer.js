import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getCharacter = createAsyncThunk("api/character", (id) => {
  return axios
    .get(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((response) => {
      console.log("API data charcter", response.data)
      if (!response.data) {
        window.location.reload()
      }
      return response.data
    })
    .catch((err) => console.log("Error from get character API"))
})

const getAllCharacters = createAsyncThunk(
  "api/characters",
  (setFilteredData) => {
    return axios
      .get(`https://www.breakingbadapi.com/api/characters`)
      .then((response) => {
        console.log("All characters", response.data)
        if (!response.data) {
          window.location.reload()
        }
        setFilteredData(response.data)
        return response.data
      })
      .catch((err) => console.log("Error from all characters"))
  }
)

const characterSlice = createSlice({
  name: "character",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getCharacter.fulfilled]: (state, action) => {
      console.log("action", action)
      state.loading = false
      state.data = action.payload
    },
    [getCharacter.pending]: (state, action) => {
      state.loading = true
    },
    [getCharacter.rejected]: (state) => {
      state.loading = false
    },
    [getAllCharacters.fulfilled]: (state, action) => {
      console.log("characters", action.payload)
      state.loading = false
      state.data = action.payload
    },
    [getAllCharacters.pending]: (state, action) => {
      state.loading = true
    },
    [getAllCharacters.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getCharacter, getAllCharacters }
export default characterSlice.reducer
