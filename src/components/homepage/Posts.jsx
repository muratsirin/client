import React, {useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, fetchPostWithID} from "../../redux/post/post-action-creators";
import Loader from 'react-loader-spinner';
import {Link} from "react-router-dom";

function Posts() {
    const dispatch = useDispatch();
    const postSelector = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        postSelector.loading ? <Loader className='text-center mb-4' type="Oval" color="#f5ba13"/>
            : postSelector.posts.map(post => {
                return (
                    <Card key={post._id} className='mb-4'>
                        <Card.Img variant='top' src='https://dummyimage.com/700x250/dee2e6/6c757d.jpg'/>
                        <Card.Body>
                            <Card.Subtitle className='text-muted small'>{post.createdAt}</Card.Subtitle>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                            <Link to={'/post/' + post._id}>
                                <Button onClick={() => dispatch(fetchPostWithID(post._id))}
                                        variant='primary'>Gönderiyi gör</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })
    );
}

export default Posts;