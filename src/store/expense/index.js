const { createSlice } = require("@reduxjs/toolkit");

const setLocalStorage = (state) => {
  let localState = {
    expenseList: state.expenseList,
    totalIncome: state.totalIncome,
  };
  localStorage.setItem("expState", JSON.stringify(localState));
};

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [],
    totalIncome: null,
  },
  reducers: {
    addExpenseAction: (state, data) => {
      state.expenseList.push(data?.payload);
      setLocalStorage(state);
    },
    addTotalIncome: (state, data) => {
      state.totalIncome = data?.payload;
      setLocalStorage(state);
    },
    addLocalStateData: (state, data) => {
      state.expenseList = data?.payload?.expenseList;
      state.totalIncome = data?.payload?.totalIncome;
    },
    deleteExpenseItem: (state, data) => {
      const updatedData = state.expenseList.filter((item) => {
        return item.name !== data?.payload.name;
      });
      state.expenseList = updatedData;
      setLocalStorage(state);
    },
  },
});

export const {
  addTotalIncome,
  addExpenseAction,
  addLocalStateData,
  deleteExpenseItem,
} = expenseSlice.actions;
