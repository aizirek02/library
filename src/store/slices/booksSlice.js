import { createSlice, nanoid } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addBook(state, action) {
      state.data.push({
        name: action.payload.name,
        id: nanoid(),
      });
    },
    removeBook(state, action) {
      const updated = state.data.filter((book) => {
        return book.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
