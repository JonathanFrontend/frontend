import './App.css';
import React, { useEffect, useState } from "react";
import Book from "./Book";
import Film from "./Film";

function TheLibrary() {
    const [books, setBooks] = useState([]);
    const [films, setFilms] = useState([]);
    const [library, setLibrary] = useState([]);

    useEffect(() => { setLibrary([...books].concat([...films])) }, [books, films]);

    function getBooks(bool) {

        if (bool) {
            fetch("http://localhost:1337/api/books?populate=*").then(r => r.json()).then(d => setBooks(d.data));
        } else if (!bool) {
            setBooks([]);
        }
    }

    function getFilms(bool) {
        if (bool) {
            fetch("http://localhost:1337/api/films?populate=*").then(r => r.json()).then(d => setFilms(d.data));
        } else if (!bool) {
            setFilms([]);
        }
    }

    return (
        <header className="App-header">
            <div>
                <span>
                    <label htmlFor='getBooks'><h3>Books</h3></label>
                    <input type={"checkbox"} id='getBooks' onChange={e => getBooks(e.target.checked)} />
                </span>
                <span>
                    <label htmlFor='getFilms'><h3>Films</h3></label>
                    <input type={"checkbox"} id='getFilms' onChange={e => getFilms(e.target.checked)} />
                </span>
            </div>
            {
                (!(books.length > 0) && !(films.length > 0)) && <section className='section-title'><h1>Choose a category</h1></section>
            }
            <div className='maindiv'>
                <div>
                    {(books.length > 0) && <h4>Books</h4>}
                    <ul>
                        {
                            books && books.map((item, i) => { return <li className='listbox' key={i}>{<Book book={item} />}</li> })
                        }
                    </ul>
                </div>
                <div>
                    {(films.length > 0) && <h4>Films</h4>}
                    <ul>
                        {
                            films && films.map((item, i) => { return <li className='listbox' key={i}>{<Film film={item} />}</li> })
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default TheLibrary;