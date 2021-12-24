import React from "react";
import {Button, Modal} from "react-bootstrap";

function ReUsableModal(props){
    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleCancel} variant="secondary">
                    İptal
                </Button>
                <Button variant="success" onClick={props.handleSubmit}>
                    {props.btnText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReUsableModal;