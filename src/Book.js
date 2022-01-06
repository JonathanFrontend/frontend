import './App.css';
import React, { useEffect, useState } from "react";
import CategoryObject from './CategoryObject';

function Book({ book }) {
    const [s, ss] = useState(false)
    const b = book.attributes;
    const rating = b.rating;
    // const starPercentage = (rating / 10) * 100 + '%';
    console.log(b)
    return (
        <div>
            <div className='worktitle'>
                <div className='worktitle-div'>
                    <h4>{b.title}</h4> <h6>{"·"}</h6>
                    <h6>{`${b.pages} pages`}</h6>
                </div>
                <div className='worktitle-div-btn'>
                    <button className={s ? "btn-true" : "btn-false"} onClick={() => ss(!s)}>Show</button>
                </div>
            </div>

            {
                s &&
                <div className='main-sub-content'>
                    <section className='rating'>
                        <div><i className="fas fa-star"></i>{` ${rating / 2}/5`}</div>
                        {/* {rating &&
                            <div className="rating-box">
                                <div className="star-outer">
                                    <div className="star-inner" style={{ width: starPercentage }}></div>
                                </div>
                            </div>
                        } */}
                    </section>
                    <section>

                    </section>
                    {
                        (b.categories.data.length > 0) &&
                        <div className='work-category'>
                            <div className='category-title-box'>
                                <h6>Categories: </h6>
                            </div>
                            <div className='work-categories'>
                                <p className='sublist'>{
                                    b.categories.data.map((e, i) => `${e.attributes.categoryName}${(i === b.categories.data.length - 1) ? "." : ", "}`)
                                }</p>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Book;