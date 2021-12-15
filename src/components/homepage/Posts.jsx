import React from "react";
import {Button, Card} from "react-bootstrap";

function Posts() {
    return (
        <Card className='mb-4'>
            <Card.Img variant='top' src='https://dummyimage.com/700x250/dee2e6/6c757d.jpg'/>
            <Card.Body>
                <Card.Subtitle className='text-muted small'>5.12.2021 18:51</Card.Subtitle>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet imperdiet elit, vitae
                    ultrices lectus eleifend id. Nulla cursus mi a blandit vestibulum. Nullam quis felis ut diam
                    accumsan sodales eu et nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Sed ullamcorper velit ut tempus dictum. Suspendisse quis dui feugiat, vehicula felis
                    ut, fringilla massa.</Card.Text>
                <Button variant='primary'>Gönderiye git →</Button>
            </Card.Body>
        </Card>
    );
}

export default Posts;