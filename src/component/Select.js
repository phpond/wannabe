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
          ชอบมาก
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
          ไม่ค่อยชอบ
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
          ไม่ชอบเลย
        </label>
      </div>
    )
}

export default Select
