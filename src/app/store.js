import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bestFoodReducer from "../features/bestFood/BestFoodSlice";
import burgerReducer from "../features/burger/BurgerSlice";
import breadReducer from "../features/breads/BreadSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bestFood: bestFoodReducer,
    burger: burgerReducer,
    bread: breadReducer,
  },
});
