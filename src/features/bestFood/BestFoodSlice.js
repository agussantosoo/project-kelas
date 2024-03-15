import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBestFood = createAsyncThunk("list-food/best-food", async () => {
  const response = await axios.get(
    "https://api-free-food.agusan.my.id/best-foods"
  );
  return response.data;
});

export const BestFoodSlice = createSlice({
  name: "bestFood",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBestFood.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBestFood.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default BestFoodSlice.reducer;
