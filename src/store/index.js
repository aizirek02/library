import { configureStore } from "@reduxjs/toolkit";
import {
  booksReducer,
  addBook,
  removeBook,
  changeSearchTerm,
} from "./slices/booksSlice";
import { formReducer, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    form: formReducer,
  },
});

export { store, changeName, changeSearchTerm, addBook, removeBook };
