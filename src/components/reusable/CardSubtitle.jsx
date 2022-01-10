import React from "react";
import {Card} from "react-bootstrap";
import {format} from "date-fns";

function CardSubtitle(props){
    const formatCreatedAt = format(new Date(Date.parse(props.createdAt)), 'dd-MM-yyyy kk:mm');
    const formatUpdatedAt = format(new Date(Date.parse(props.updatedAt)), 'dd-MM-yyyy kk:mm');
    return (
        <Card.Subtitle className='text-end small'>
            <div>
                {formatUpdatedAt ? formatUpdatedAt : formatCreatedAt}
                <h6>{props.firstName + ' ' + props.lastName}</h6>
            </div>
        </Card.Subtitle>
    )
}

export default CardSubtitle;