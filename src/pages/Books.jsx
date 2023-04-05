import React, { useState } from "react";

import Book from "../components/ui/Book";

function Books({ books }) {
  const [bookSort, setBookSort] = useState(books);

  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBookSort(
        bookSort
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "HIGH_TO_LOW") {
      setBookSort(
        bookSort
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "RATING") {
      setBookSort(bookSort.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort{" "}
                  </option>
                  <option value="LOW_TO_HIGH">price, Low to high</option>
                  <option value="HIGH_TO_LOW">price, High to low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {bookSort.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Books;
