import './App.css'
import React, { Component } from 'react';
import TestList from "./TestList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products : ""};
  }

  componentDidMount() {
    this.setState({products : [
      { productId: 1, productName: "สลัดผัก"},
      { productId: 2, productName: "ไก่ทอด"},
      { productId: 3, productName: "บิงซู"},

  ]})
  }

  render() {
    return (
      <div>
        <TestList products={this.state.products} />
      </div>
    );
  }
}

export default App;
