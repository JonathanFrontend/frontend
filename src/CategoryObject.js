import './App.css';
import React, { useEffect, useState } from "react";

function CategoryObject({ category }) {
    const [s, ss] = useState(false)
    const c = category.attributes;
    return (
        <>
            <div className='worktitle'>
                <h4>{c.categoryName}</h4>
                <button className={s ? "btn-true" : "btn-false"} onClick={() => ss(!s)}>Show</button>
            </div>
            {
                s &&
                <div className='main-sub-content'>
                    {
                        (c.books.data.length > 0) &&
                        <>
                            <h6>Books</h6>
                            <ul>
                                {
                                    c.books.data.map((e, i) => <li key={i}>{e.attributes.title}</li>)
                                }
                            </ul>
                        </>
                    }
                    {
                        (c.films.data.length > 0) &&
                        <>
                            <h6>Movies</h6>
                            <ul>
                                {
                                    c.films.data.map((e, i) => <li key={i}>{e.attributes.title}</li>)
                                }
                            </ul>
                        </>
                    }
                </div>
            }
        </>
    );
}

export default CategoryObject;