import { useDispatch, useSelector } from "react-redux";
import { changeName, addBook } from "../store";
import { Button, Input, Select, Space } from "antd";

function BookForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addBook({ name }));
  };

  return (
    <Space.Compact>
      <form
        style={{ marginLeft: "80px", marginTop: "40px" }}
        onSubmit={handleSubmit}
      >
        <h3>Book Name</h3>
        <Input
          style={{ width: "25rem", height: "2rem" }}
          value={name}
          onChange={handleNameChange}
          placeholder="Add a book"
        />
      </form>
    </Space.Compact>
  );
}

export default BookForm;
