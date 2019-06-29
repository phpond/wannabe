import React, { Component } from "react";
import TestItem from "./TestItem";

class TestList extends Component {
  showProducts() {
    return (
      this.props.Test &&
      this.props.Test.map(Test => (
        <TestItem key={Test.title} Test={Test}  />
      ))
    );
  }

  render() {
    return <div className="row">{this.showProducts()}</div>;
  }
}

export default TestList;
