import React, { Component } from "react";
import TestItem from "./TestItem";

class TestList extends Component {
  showProducts() {
    return (
      this.props.question.map(Test => (
        <TestItem key={Test.title} Test={Test}  />
      ))
    );
  }

  render() {
    console.log(this.props)
    return (
      <div className="row">{this.showProducts()}</div>
    )
  }
}

export default TestList;
