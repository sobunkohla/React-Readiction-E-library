import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    // alternative 1:
    // const DuplicateItem = cart.find(item => +item.id === +book.id)
    // if (DuplicateItem){
    //   DuplicateItem.quantity += 1;
    //   setCart( cart.map(item => {
    //     if (item.id === DuplicateItem.id) {
    //          return {
    //           ...item,
    //           quantity: DuplicateItem.quantity,
    //          }
    //     }
    //     return item;
    //   }) );
    // }
    // else {
    //   setCart( prev => [ ...prev , {...book, quantity: 1} ] );
    // }

    //Best practice:

    setCart((prev) => [...prev, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function remove(item) {
    console.log(item);
    setCart((prev) => prev.filter((tem) => tem.id !== item.id));
  }
  function itemNumber() {
    // alt 1
    //   let count = 0;
    //  cart.forEach((item) =>
    //  count += item.quantity)
    //  return count;

    let count = 0;
    count = cart.reduce((acc, item) => acc + item.quantity, 0);
    return count;
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className="App">
        <Nav itemNumber={itemNumber()} />

        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact path="/books">
          <Books books={books} />
        </Route>
        <Route path="/books/:id">
          <BookInfo addToCart={addToCart} cart={cart} books={books} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            books={books}
            changeQuantity={changeQuantity}
            remove={remove}
          />
        </Route>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
