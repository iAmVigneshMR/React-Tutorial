import React from 'react';
import { useParams } from 'react-router';

const ProductDeatails = () => {
  const params = useParams();
  return <section>
            <h1>product details</h1>
            <p>{params.productId}</p>
        </section>;
};

export default ProductDeatails;
