import React from 'react';
import { Link } from 'react-router-dom';

export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    // const { params: { id } } = this.props.match;
    this.state = {product: ''};
  }

  componentDidMount() {
    const { params: { id } } = this.props.match;
    this.setState({productId: id})

    fetch(`/api/products/${id}`)
    .then((res) => 
        res.json())
        .then(( result ) => 
        this.setState({ product: result }));
        console.log(this.state.product)
  }

  render() {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Facts about {this.state.product.productName}</h5>
        <p className="card-text"><b>{this.state.product.weight}g plastic</b></p>
        <p className="card-text">Takes <b>{this.state.product.lifeSpan} years</b> to biodegrade</p>
        <Link to={`/alternatives/${this.state.productId}`} className="btn btn-primary">
          Alternatives
        </Link>
      </div>
  </div>
  )
  }
}
