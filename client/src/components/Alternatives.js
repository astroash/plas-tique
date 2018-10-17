import React from 'react';

const Alternatives = (props) => {
  const { location: { state: { product }}} = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Alternatives to {product.productName}s</h5>
        {product.recommendations.map((recommendation, index) => 
          <p key={index}
            className="card-text"
          >
            <b>{recommendation}</b>
          </p>
        )}
        <img src={product.alternativeProduct} alt="alternative-pic" />
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
)};

export default Alternatives;
