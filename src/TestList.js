import React, {useState, useEffect} from "react"
import TestItem from "./TestItem"

const TestList = (props) => {
    const [listAnswer, setListAnswer] = useState([])

  

    

    return (
      <div className="row">
        {
          props.question.map((test, index) => (
            <TestItem key={index} title={test.title} id={test.id} setListAnswer={setListAnswer} listAnswer={listAnswer} />
          ))
        }
      </div>
    )
}

export default TestList