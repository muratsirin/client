import React from "react";
import {Card, ListGroup} from "react-bootstrap";

function Categories() {
    return (
        <Card className='mb-4'>
            <Card.Header>Kategoriler</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item><a href='#'>Web Design</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>HTML</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>React JS</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>Javascript</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>Flutter</a></ListGroup.Item>
                    <ListGroup.Item><a href='#'>Nodejs</a></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Categories;