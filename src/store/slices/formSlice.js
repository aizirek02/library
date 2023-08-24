import { createSlice } from "@reduxjs/toolkit";
import { addBook } from "./booksSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addBook, (state, action) => {
      state.name = "";
    });
  },
});

export const { changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;
