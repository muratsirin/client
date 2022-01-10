import React from "react";
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import PostImage from "../reusable/Image";
import CardSubtitle from "../reusable/CardSubtitle";

function Post() {
    const post = useSelector(state => state.post.post);
    return (
        <div className='my-4'>
            <h1>{post.title}</h1>
            <Card>
                {post.image &&
                <PostImage imageData={post.image.img.data} mimeType={post.image.img.mimeType}/>}
                <Card.Body>
                    <Card.Text>{post.content}</Card.Text>
                    <CardSubtitle createdAt={post.createdAt} updatedAt={post.updatedAt}
                                  firstName={post.user?.firstName} lastName={post.user?.lastName}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;