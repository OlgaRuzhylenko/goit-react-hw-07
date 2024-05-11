import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
		name: ""
	},

  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;


// const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",

//   reducers: {
//     changeFilter(state, action) {
//       return action.payload;
//     },
//   },
// });
// export const { changeFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

// export const selectNameFilter = (state) => state.filters;
