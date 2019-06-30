import React, {useState, useEffect} from "react";

const Select = (props) => {
    return (
      <div>
        <label className="radio-inline">
          <input
            type="radio"
            value="2"
            name={`${props.id}`}
            onChange={() => props.setListAnswer([...props.listAnswer, {
              id: props.id,
              answerValue: "2"
            }])}
            required
          />
          A
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            value="1"
            name={`${props.id}`}
            onChange={() => props.setListAnswer([...props.listAnswer, {
              id: props.id,
              answerValue: "1"
            }])}
            required
          />
          B
        </label>
        <label className="radio-inline">
          <input
            type="radio"
            name={`${props.id}`}
            value="0"
            onChange={() => props.setListAnswer([...props.listAnswer, {
              id: props.id,
              answerValue: "0"
            }])}
            required
          />
          X
        </label>
      </div>
    )
}

export default Select
