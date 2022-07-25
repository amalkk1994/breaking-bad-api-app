import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getQuote = createAsyncThunk("api/quote", (id) => {
  return axios
    .get(`https://breakingbadapi.com/api/quotes/${id}`)
    .then((response) => {
      console.log("quote data", response.data);
      if (!response.data[0]) {
        window.location.reload();
      }
      return response.data;
    })
    .catch((err) => console.log("Error from api call:" + err));
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getQuote.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getQuote.pending]: (state, action) => {
      state.loading = true;
    },
    [getQuote.rejected]: (state) => {
      state.loading = false;
      state.error = "Some Error from Quotes";
    },
  },
});

export { getQuote };
export default quoteSlice.reducer;
