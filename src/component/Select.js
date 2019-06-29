import React from 'react';



class Select extends React.Component {


  
  render() {
    return (


<form>
        <label className="radio-inline">
          <input type="radio" name="optradio" defaultChecked />A
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" />B
        </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" />X
        </label>
      </form>


      );
    }
  }
 


export default Select;