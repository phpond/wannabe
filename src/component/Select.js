import React from 'react';



class Select extends React.Component {


  
  render() {
    return (


<form>
        <label className="radio-inline">
          <input type="radio" name="optradio" defaultChecked />Option 1
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" />Option 2 
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" />Option 3
        </label>
      </form>


      );
    }
  }
 


export default Select;