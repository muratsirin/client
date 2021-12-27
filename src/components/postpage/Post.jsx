import React from "react";
import {Card} from "react-bootstrap";

function Post() {
    return (
        <div className='my-4'>
            <h1>Title</h1>
            <Card>
                <Card.Img variant='top' src='https://dummyimage.com/700x250/dee2e6/6c757d.jpg'/>
                <Card.Body>
                    <Card.Subtitle className='text-muted small'>date</Card.Subtitle>
                    <Card.Text>content</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;