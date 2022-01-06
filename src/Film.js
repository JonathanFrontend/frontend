import './App.css';
import React, { useEffect, useState } from "react";
import CategoryObject from './CategoryObject';

function Film({ film }) {
    const [s, ss] = useState(false)
    const f = film.attributes;
    const rating = f.rating;
    // const starPercentage = (rating / 10) * 100 + '%';
    function runtimeHM(mm) {
        var hours = Math.floor(mm / 60);
        var minutes = mm % 60;
        return hours + "h " + minutes + "min";
    }
    console.log(f)
    return (
        <div>
            <div className='worktitle'>
                <div className='worktitle-div'>
                    <h4>{f.title}</h4> <h6>{"·"}</h6>
                    <h5> {f.dateOfRelease.split("-")[0]} </h5>  <h6>{"·"}</h6>
                    <h6>{runtimeHM(f.lengthMin)}</h6>
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
                    {
                        (f.categories.data.length > 0) &&
                        <div className='work-category'>
                            <div className='category-title-box'>
                                <h6>Categories: </h6>
                            </div>
                            <div className='work-categories'>
                                <p className='sublist'>{
                                    f.categories.data.map((e, i) => `${e.attributes.categoryName}${(i === f.categories.data.length - 1) ? "." : ", "}`)
                                }</p>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Film;