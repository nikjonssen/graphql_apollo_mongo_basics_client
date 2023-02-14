import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query getBooks {
    books {
      name
      id
      genre
    }
  }
`;

const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      name
      age
    }
  }
`;

const GET_SINGLE_BOOK = gql`
  query getSingleBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const DELETE_SINGLE_BOOK = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      name
    }
  }
`;

export {
  GET_BOOKS,
  GET_AUTHORS,
  ADD_BOOK_MUTATION,
  GET_SINGLE_BOOK,
  DELETE_SINGLE_BOOK,
};
