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
      {/* {loading && <p>Loading...</p>} */}
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

  //   if (loading) return <div className="book-details">Loading...</div>;
  //   if (error || !data)
  //     return (
  //       <div className="book-details">
  //         {error ? `Error : ${error.message}` : `No book was selected`}
  //       </div>
  //     );
  //   if (data.book) {
  //     const { book } = data;
  //     return (
  //       <div className="book-details">
  //         <h2>{book.name}</h2>
  //         <p>genre: {book.genre}</p>
  //         <p>author: {book.author.name}</p>
  //         <p>other books by the author:</p>
  //         <ul className="other-books">
  //           {book.author.books.map((x) => {
  //             return <li key={x.id}>{x.name}</li>;
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="book-details">
  //         <p>No book info was found</p>
  //       </div>
  //     );
  //   }
}

export default BookDetails;
