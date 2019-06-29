import React, { Component } from "react";
import Select from "./component/Select";


class TestItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {id, title} = this.props.Test;
        return (
            <div className="col-md-3 col-sm-6">
                <h5 className="mt-2">{id}  {title} <Select /></h5>
                
                
            </div>
        )
    }
}

export default TestItem;