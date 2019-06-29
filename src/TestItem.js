import React, { Component } from "react";
import Select from "./component/Select";


class TestItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                
                <Select />
            </div>
        )
    }
}

export default TestItem;