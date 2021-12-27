import React from "react";
import {Card} from "react-bootstrap";

function Comments() {
    return (
        <div>
            <h4>Yorumlar</h4>
            <Card className='mb-4'>
                <Card.Body>
                    <Card.Subtitle className='text-muted small'>date</Card.Subtitle>
                    <Card.Title>title</Card.Title>
                    <Card.Text>content</Card.Text>
                    <hr/>
                    <Card.Title>title</Card.Title>
                    <Card.Text>content</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Comments;