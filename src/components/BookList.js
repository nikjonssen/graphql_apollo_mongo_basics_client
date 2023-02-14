import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOKS, DELETE_SINGLE_BOOK } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook, mutationStatus] = useMutation(DELETE_SINGLE_BOOK);

  const [bookId, setBookId] = useState(null);

  const handleDelete = (prop) => {
    deleteBook({
      variables: { id: prop },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="book-list">
      <ul className="booklistul">
        {data.books.map((book) => {
          return (
            <div className="book-item" key={book.id}>
              <li className="book" onClick={() => setBookId(book.id)}>
                <span>{book.name}</span>
              </li>
              <button
                className="delete-book"
                onClick={() => handleDelete(book.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
      <BookDetails id={bookId} />
    </div>
  );
}

export default BookList;
