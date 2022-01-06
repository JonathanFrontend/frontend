import './App.css';
import React, { useEffect, useState } from "react";
import CategoryObject from './CategoryObject';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [chosenCategories, setChosenCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/categories?populate=*").then(r => r.json()).then(d => setCategories(d.data));
    }, [])

    function chooseCategories(bool, o) {
        if (bool) {
            let arr = [...chosenCategories];
            arr.push(o)
            setChosenCategories(arr)
        } else if (!bool) {
            let arr = [...chosenCategories];
            let newArr = arr.filter(e => e.id !== o.id);
            setChosenCategories(newArr);
        }
    }

    return (
        <header className="App-header">
            <div className='category-menu'>
                {
                    categories && categories.map((c, i) =>
                        <span key={i} className='category-menu-item'>
                            <input type={"checkbox"} id={c.attributes.categoryName} onChange={(e) => chooseCategories(e.target.checked, c)} />
                            <label htmlFor={c.attributes.categoryName}> <h3>{c.attributes.categoryName}</h3> </label>
                        </span>)
                }
            </div>
            <ul className='contentul'>
                {
                    (chosenCategories.length > 0) ? chosenCategories.map((c, i) => { return <li key={i} className="li"><CategoryObject category={c} /></li> }) :
                        <li><h1>Choose a category</h1></li>
                }
            </ul>
        </header>
    );
}

export default Categories;