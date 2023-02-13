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

const ADD_BOOK_MUTATION = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
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

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK_MUTATION, GET_SINGLE_BOOK };
