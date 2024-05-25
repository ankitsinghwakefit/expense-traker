import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/index";
import { authSlice } from "./auth/index";
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    AUTH: authSlice.reducer,
  },
});

export { store };
