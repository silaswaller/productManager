import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`,
        {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <header>
                <h1>Product Manager</h1>
                <Link to={"/"}>Return Home</Link>
            </header>

            <form onSubmit={submitHandler}>
                <div id="create">
                    <div className="input">
                    <label>Title</label>
                    <input value={title} onChange={((e) => setTitle(e.target.value))} type="text"></input>
                    </div>
                    <div className="input">
                    <label>Price</label>
                    <input value={price} onChange={((e) => setPrice(e.target.value))} type="text"></input>
                    </div>
                    <div className="input">
                    <label>Description</label>
                    <input value={description} onChange={((e) => setDescription(e.target.value))} type="text"></input>
                    </div>
                    <button>Save Changes</button>
                </div>
                
            </form>
        </div>
    )

}

export default UpdateProduct;