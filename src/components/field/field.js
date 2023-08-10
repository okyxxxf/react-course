import React from "react";
import { ListGroupItem } from "reactstrap";

const Field = ({item, label, name}) => {
    return (
        <ListGroupItem 
        className='d-flex justify-content-between px-5'>
            <span className="term">{label}</span>
            <span>{item[name]}</span>
        </ListGroupItem>
    )
}

export default Field;