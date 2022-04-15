import AllProducts from "../components/AllProducts";
import NewProduct from "../components/NewProduct";
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return(

        <div>
            <NewProduct productList={productList} setProductList={setProductList} />
            <div id="blackBar"></div>
            <AllProducts productList={productList} setProductList={setProductList} />

        </div>

    );
}

export default Main;