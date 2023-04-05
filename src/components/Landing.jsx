import UndrawBooks from "../assets/Undraw_Books.svg"

function Landing() {
 return (
    <section id="landing">
    <div className="header__container">
        <div className="header__description">
            <h1>South Africa's most awarded online library platform</h1>
            <h2>Pull out a new addiction with <span className="purple">Readiction</span></h2>
            <a href="#features">
                <button className="btn"> Browse Books</button>
            </a>
        </div>
        <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" className="" />
        </figure>
    </div>
    </section>
 )
}

export default Landing