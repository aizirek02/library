import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function BookSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.books.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <Space.Compact
      style={{
        marginTop: "60px",
      }}
    >
      <form
        style={{
          marginLeft: "120px",
        }}
      >
        <h3>Search</h3>
        <Input
          style={{
            width: "30rem",
            height: "2.5rem",
          }}
          value={searchTerm}
          placeholder="Search a book"
          onChange={handleSearchTermChange}
        />
      </form>
    </Space.Compact>
  );
}

export default BookSearch;
