import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <div>
      <BookForm />
      <BookSearch />
      <BookList />
    </div>
  );
}

export default App;
