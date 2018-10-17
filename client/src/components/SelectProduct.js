import React from 'react';
import products from '../mockProducts.json';

const getAllProducts = () => {
  return products;
}

const SelectProduct = () => {
  const products = getAllProducts();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Select Product</h5>
        <p className="card-text">Pick the plastic product you have used recently to log and check the environmental impact.</p>
        {products.map(product =>
          <a 
            href={`/facts/${product.productId}`}
            className="btn btn-primary"
            >
            {product.productName}
          </a>
        )} 
      </div>
    </div>
  )
};

export default SelectProduct;


