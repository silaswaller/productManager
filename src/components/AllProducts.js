import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {

    const [productList, setProductList] = useState([]);

    const deleteProduct = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(productList.filter(product => product._id !== idFromBelow));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {

        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [productList])

    return(
        <div>
            <header>
                <h1>All Products</h1>
            </header>

            {
                productList.map((product, index) => (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <br />
                        <Link to={`/product/edit/${product._id}`}>Edit</Link>
                        <br />
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default AllProducts;