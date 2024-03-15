import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBread = createAsyncThunk("list-food/bread", async () => {
  const response = await axios.get("https://api-free-food.agusan.my.id/breads");
  return response.data;
});

export const BreadSlice = createSlice({
  name: "bread",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBread.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBread.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default BreadSlice.reducer;
