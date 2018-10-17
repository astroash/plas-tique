import React from 'react';
import { Link } from 'react-router-dom';
import products from '../mockProductFacts.json';

const getProduct = (id) => {
  return products[id];
}

const Facts = ({ match }) => {
  const { params: { id } } = match;
  const product = getProduct(id);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Facts about Waterbottles</h5>
        <p className="card-text"><b>{product.weight}g plastic</b></p>
        <p className="card-text">Takes <b>{product.lifeSpan} years</b> to biodegrade</p>
        <Link to={{ pathname: "/alternatives", state: { product }}} className="btn btn-primary">
          Alternatives
        </Link>
      </div>
  </div>
)};

export default Facts;
