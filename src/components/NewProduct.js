import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTitle("");
        setPrice("");
        setDescription("");
        axios.post("http://localhost:8000/api/products",
        {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <header>
                <h1>Product Manager</h1>
            </header>

            <form onSubmit={submitHandler}>
                <div id="create">
                    <div class="input">
                    <label>Title</label>
                    <input value={title} onChange={((e) => setTitle(e.target.value))} type="text"></input>
                    </div>
                    <div class="input">
                    <label>Price</label>
                    <input value={price} onChange={((e) => setPrice(e.target.value))} type="text"></input>
                    </div>
                    <div class="input">
                    <label>Description</label>
                    <input value={description} onChange={((e) => setDescription(e.target.value))} type="text"></input>
                    </div>
                    <button>create</button>
                </div>
                
            </form>
        </div>
    )
}

export default NewProduct;