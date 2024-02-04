import { createSlice } from "@reduxjs/toolkit";

// type TTodos = {
//     todos:[]
// }
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
