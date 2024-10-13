import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// export const selectFilter = (state) => state.filters.name;
export const selectFilter = (state) => {
  console.log("Current filter value:", state.filters.name);
  return state.filters.name;
};

export default filtersSlice.reducer;
