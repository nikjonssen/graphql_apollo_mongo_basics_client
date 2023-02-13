import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_SINGLE_BOOK } from "../queries/queries";

function BookDetails({ id }) {
  const [getSigleBook, { loading, error, data }] = useLazyQuery(
    GET_SINGLE_BOOK,
    {
      variables: { id },
    }
  );

  useEffect(() => {
    if (id) {
      getSigleBook();
    }
  }, [id]);

  return (
    <div className="book-details">
      {error && <p>Error : ${error.message}</p>}
      {data && data.book && (
        <div className="book-main">
          <h2>{data.book.name}</h2>
          <p>genre: {data.book.genre}</p>
          <p>author: {data.book.author.name}</p>
          <p>other books by the author:</p>
          <ul className="other-books">
            {data.book.author.books.map((x) => {
              return <li key={x.id}>{x.name}</li>;
            })}
          </ul>
        </div>
      )}
      {!data && !loading && <p>No book selected...</p>}
    </div>
  );
}

export default BookDetails;
