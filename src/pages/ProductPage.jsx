import React from 'react';
import {useParams} from 'react-router-dom';

const ProductPage = () => {
    let {id, name} = useParams();
    return (
        <div>
                        <h1>Product Page</h1>
                        <p>ID: {id}</p>
                        <p>Name: {name}</p>

        </div>
    );
};

export default ProductPage;