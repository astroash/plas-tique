import React from 'react';

export default class SelectProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    fetch('/api/products')
    .then((res) => 
        res.json())
        .then(( results ) => 
        this.setState({ products: results }));
  }

  render() {
    return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Select Product</h5>
        <p className="card-text">Pick the plastic product you have used recently to log and check the environmental impact.</p>
        {this.state.products.map(product =>
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
 }
};


