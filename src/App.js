import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
