import React from "react";
import Highlight from "./ui/Highlight";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            How is <span className="purple">Readiction</span> Different
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              title="Fast and Efficient"
              img={<FontAwesomeIcon icon="bolt" />}
              para="Instantaneous and easy access to your desired book"
            />
            <Highlight
              title="40 000+ Books"
              img={<FontAwesomeIcon icon="book-open" />}
              para="Feed Your Mind with our large variety of books"
            />
            <Highlight
              title="Affordable"
              img={ <FontAwesomeIcon icon="tags" />}
              para=" Feed on the best books for as low as $10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
