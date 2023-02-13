import { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK_MUTATION, GET_BOOKS } from "../queries/queries";

function AddBook() {
  const queryStatus = useQuery(GET_AUTHORS);
  const [addBook, mutationStatus] = useMutation(ADD_BOOK_MUTATION);

  const nameContainer = useRef("");
  const genreContainer = useRef("");
  const authorIdContainer = useRef("");

  if (queryStatus.loading) return <p>Loading...</p>;
  if (queryStatus.error) return <p>Error : {queryStatus.error.message}</p>;
  // console.log(queryStatus.data);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: nameContainer.current.value,
      genre: genreContainer.current.value,
      authorId: authorIdContainer.current.value,
    };
    if (
      formData.name !== "" &&
      formData.genre !== "" &&
      formData.authorId !== ""
    ) {
      addBook({
        variables: formData,
        refetchQueries: [{ query: GET_BOOKS }],
      });
    } else {
      alert(`Please enter all the info`);
    }
    // console.log(formData);
    // console.log(queryStatus);
    // console.log(mutationStatus);
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" ref={nameContainer} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" ref={genreContainer} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select ref={authorIdContainer}>
          <option value={""}>Select author</option>
          {queryStatus.data.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
