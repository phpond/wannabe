import React, {useState, useEffect, Component } from "react";
import Select from "./component/Select";
import { Card } from 'react-bootstrap';

const TestItem = (props) => {
    return (
        <div className="col-md-6 col-sm-6">
            <h5 className="mt-2">{props.id} {props.title} <Select setListAnswer={props.setListAnswer} listAnswer={props.listAnswer} id={props.id} /></h5>
        </div> 
    )
}

export default TestItem

    // componentDidMount() {
    //     // this.setState({
    //     //     [this.props.Test.id] : {
    //     //         question: this.props.Test.title,
    //     //         answer: ""
    //     //     }
    //     // })
    //     // console.log(this.state)
    // }

    // setAnswer = (questionId) => {
    //     // this.setState.answer = value;

    //     this.setState(
    //         {
    //             list: [
    //                 ...this.state.list,
    //                 {
    //                     [this.props.Test.id] : {
    //                         question: questionId,
    //                         answer: ""
    //                     }
    //                 }
    //             ]
    //         }
    //     )
    // }

