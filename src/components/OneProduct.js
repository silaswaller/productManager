import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const OneProduct = (props) => {

    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res => {
                console.log(res);
                console.log(res.data);
                setProduct(res.data);
            }))
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    return(
        <div>
            <header>
                <h1>{product.title}</h1>
            </header>

            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={deleteProduct}>Delete</button>
            <br />
            <Link to={"/"}>Return Home</Link>
        </div>
    )
}

export default OneProduct;