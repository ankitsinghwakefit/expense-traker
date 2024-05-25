const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    totalIncome: null,
  },
  reducers: {
    addExpenseAction: (state, data) => {
      console.log(data);
      state.expenseList.push(data.payload);
      //console.log("addExpenseAction", state.expenseList.push(data.payload));
    },
    addTotalIncome: (state, data) => {
      state.totalIncome = data.payload;
    },
  },
});

export const { addTotalIncome, addExpenseAction } = expenseSlice.actions;
