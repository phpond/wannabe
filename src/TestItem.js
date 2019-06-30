import React, { Component } from "react";
import Select from "./component/Select";
import { Card } from 'react-bootstrap';



class TestItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 2
        }
    }

    componentDidMount() {
        this.setState({
            [this.props.Test.id] : {
                question: this.props.Test.title,
                answer: ""
            }
        })
        console.log(this.state)
    }

    setAnswer = (questionId) => {
        console.log(questionId)
    }

    render() {
        console.log(this.state)
        const {id, title} = this.props.Test;
        return (

        <div className="col-md-6 col-sm-6">
               <h5 className="mt-2">{id}  {title} <Select setAnswer={this.setAnswer} questionId={id}/></h5>
             </div> 

        //     <div>
                
        //     <Card>
        //     <Card.Header><h5 className="mt-2">{id}  {title}</h5> </Card.Header>
        //     <Card.Body>
        //       <blockquote className="blockquote mb-0">
        //         <p>
        //         <Select setAnswer={this.setAnswer} questionId={id}/>
        //         </p>
               
        //       </blockquote>
        //     </Card.Body>
        //   </Card> <br/>
        //   </div>
           
        )
    }
}

export default TestItem;

