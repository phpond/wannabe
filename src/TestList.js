import React, { Component } from "react";
import TestItem from "./TestItem";

class TestList extends Component {
  showProducts() {
    return (
      this.props.products &&
      this.props.products.map(product => (
        <TestItem key={product.productId} product={product}  />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default TestList;
