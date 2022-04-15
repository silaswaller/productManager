import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OneProduct = (props) => {

    const [product, setProduct] = useState({});

    const {id} = useParams();

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
            <Link to={"/"}>Return Home</Link>
        </div>
    )
}

export default OneProduct;