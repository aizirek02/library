import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../store";
import { AiFillDelete } from "react-icons/ai";
import Photo1 from "./bookPhoto/b1.jpg";
import Photo2 from "./bookPhoto/b2.jpg";
import Photo3 from "./bookPhoto/b3.jpg";
import Photo4 from "./bookPhoto/b4.jpg";
import Photo5 from "./bookPhoto/b5.jpg";
import Photo6 from "./bookPhoto/b6.jpg";

function BookList() {
  const dispatch = useDispatch();
  const { books, name } = useSelector(
    ({ form, books: { data, searchTerm } }) => {
      const filteredBooks = data.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        books: filteredBooks,
        name: form.name,
      };
    }
  );

  const handleBookDelete = (book) => {
    dispatch(removeBook(book.id));
  };

  var imgs = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

  var randomnum = Math.floor(Math.random() * imgs.length);

  const renderedBooks = books.map((book) => {
    // DECİDE İF THİS BOOK SHOULD BE BOLD
    const bold = name && book.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={book.id}
        style={{
          fontSize: "20px",
          marginLeft: "65px",
          marginRight: "65px",
          boxShadow: "1px 2.5px  lightgray",
        }}
      >
        <p>{book.name}</p>
        <img
          style={{ width: "200px", height: "200px" }}
          src={imgs[randomnum]}
          alt="book"
        />
        <button onClick={() => handleBookDelete(book)}>
          <AiFillDelete />
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedBooks} <hr />
    </div>
  );
}

export default BookList;
