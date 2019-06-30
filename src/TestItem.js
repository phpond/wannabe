import React, {useState, useEffect, Component } from "react";
import Select from "./component/Select";
import "./component/header.css";

import { Card } from 'react-bootstrap';

const TestItem = (props) => {
    return (
        <div className="col-md-6 col-sm-6">
            <h2 className="mt-2">{props.id} {props.title} <Select setListAnswer={props.setListAnswer} listAnswer={props.listAnswer} id={props.id} /></h2>
        </div> 
    )
}

export default TestItem


