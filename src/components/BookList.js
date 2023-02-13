import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // console.log(data);

  return (
    <div className="book-list">
      <ul className="booklistul">
        {data.books.map((book) => {
          return (
            <li
              className="book"
              key={book.id}
              onClick={() => setBookId(book.id)}
            >
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails id={bookId} />
    </div>
  );
}

export default BookList;
