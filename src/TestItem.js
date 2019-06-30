import React, { Component } from "react";
import Select from "./component/Select";


class TestItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        // this.setState({
        //     [this.props.Test.id] : {
        //         question: this.props.Test.title,
        //         answer: ""
        //     }
        // })
        // console.log(this.state)
    }

    setAnswer = (questionId,value) => {
        this.setState.answer = value;
        
        console.log(questionId,value)

        this.setState({
            [this.props.Test.id] : {
                question: questionId,
                answer: value
            }
        })
        // console.log(this.props.Test)
        // let list  = this.state.list;
        // list.push(this.props.Test);
        // this.setState({
        //     list:list
        // })
        // console.log(list)
    }

    render() {
        console.log(this.state)
        const {id, title} = this.props.Test;
        return (
            <div className="col-md-3 col-sm-6">
                <h5 className="mt-2">{id}  {title} <Select setAnswer={this.setAnswer.bind(this)} questionId={id} /></h5>
            </div>
        )
    }
}

export default TestItem;