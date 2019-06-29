import React from 'react';



class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: "2"};

    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    const { value } = this.state;


    return (


<form>
        <label className="radio-inline">
          <input type="radio" name="optradio" defaultValue="2" defaultChecked onChange={this.handleChange}/>A
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" defaultValue="1" onChange={this.handleChange}/>B
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" defaultValue="0" onChange={this.handleChange}/>X
        </label>

        <h2>Rating from state: {value}</h2>

      </form>


      );
    }
  }
 


export default Select;