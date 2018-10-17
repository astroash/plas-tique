import React from 'react';
export default class Alternatives extends React.Component {
    constructor(props) {
      super(props);
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
        <h5 className="card-title">Alternatives to {this.state.product.productName}s</h5>
        {
          this.state.product ? this.state.product.recommendations.map((recommendation, index) => 
          <p key={index}
            className="card-text"
          >
            <b>{recommendation}</b>
          </p>
         ) : ''
        }
        <img src={this.state.product.alternativeProduct} alt="alternative-pic" />
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
  )}
}