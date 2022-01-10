import React from "react";
import {Card} from "react-bootstrap";

function PostImage(props){
    const imageData = props.imageData;
    const base64 = new Buffer(imageData).toString('base64');
    const mimeType = props.mimeType;
    const imgSrc = 'data:' + mimeType + ';base64,' + base64;

    return (
        <Card.Img variant='top' src={imgSrc} alt='post-image'/>
    )
}

export default PostImage;