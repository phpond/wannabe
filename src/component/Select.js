import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
  }

  

  render() {
    return (
      <div>
        <label className="radio-inline">
          <input
            type="radio"
            value="2"
            name={`${this.props.questionId}`}
            onChange={() => this.props.setAnswer(this.props.questionId, this.state.answer = "2")}
          />
          A
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            value="1"
            name={`${this.props.questionId}`}
            
            onChange={() => this.props.setAnswer(this.props.questionId,this.state.answer = "1")}
          />
          B
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name={`${this.props.questionId}`}
            value="0"
            onChange={() => this.props.setAnswer(this.props.questionId,this.state.answer = "0")}
          />
          X
        </label>
      </div>
    );
  }
}

export default Select;
