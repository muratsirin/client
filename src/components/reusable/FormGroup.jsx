import React from "react";
import {Form} from "react-bootstrap";

function FormGroup(props) {

    return (
        <div>
            <Form.Group className='mb-3'>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control id={props.id} type={props.type} name={props.name} value={props.value} onChange={props.onChange}
                              placeholder={props.placeholder} as={props.as} rows={props.rows} hidden={props.hidden}/>
                <span className='text-danger'>{props.error}</span>
            </Form.Group>
        </div>
    )
}

export default FormGroup;