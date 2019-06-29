import React from "react";

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
  }

    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  

  render() {
    const { value } = this.state;


    return (
      <div>
        <label className="radio-inline">

          <input
            type="radio"
            name={`${this.props.questionId}`}
            
            onChange={() => this.props.setAnswer(this.props.questionId)}
          />
          A
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name={`${this.props.questionId}`}
            
            onChange={() => this.props.setAnswer(this.props.questionId)}
          />
          B
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name={`${this.props.questionId}`}
            
            onChange={() => this.props.setAnswer(this.props.questionId)}
          />
          X
        </label>
      </div>
    );
  }
}

export default Select;
