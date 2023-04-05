import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/books">
          <Books books={books} />
        </Route>
        <Route path="/books/:id">
          <BookInfo books={books} />
        </Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
