import React from "react";
import {Button, Card} from "react-bootstrap";
import {fetchPostWithID} from "../../redux/post/post-action-creators";
import Loader from 'react-loader-spinner';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostImage from "../Image";
import CardSubtitle from "../CardSubtitle";

function Posts() {
    const postSelector = useSelector((state) => state.post);

    return (
        postSelector.loading ? <Loader className='text-center mb-4' type="Oval" color="#f5ba13"/>
            : postSelector.posts.map(post => {
                return (
                    <Card key={post._id} className='mb-4'>
                        {post.image &&
                        <PostImage imageData={post.image.img.data} mimeType={post.image.img.mimeType}/>}
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                            <Link to={'/post/' + post._id}>
                                <Button variant='primary'>Gönderiyi gör</Button>
                            </Link>
                            <CardSubtitle createdAt={post.createdAt} updatedAt={post.updatedAt}
                                          firstName={post.user.firstName} lastName={post.user.lastName}/>
                        </Card.Body>
                    </Card>
                );
            })
    );
}

export default Posts;