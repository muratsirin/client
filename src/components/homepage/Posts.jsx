import React, {useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/post/post-action-creators";
import Loader from 'react-loader-spinner';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        posts.posts.posts.map(post => {
            console.log(post.title);
        })
    }

    return (
        posts.loading ? <Loader className='text-center mb-4' type="Oval" color="#f5ba13"/>
            : posts.posts.map(post => {
                return (
                    <Card key={post._id} className='mb-4'>
                        <Card.Img variant='top' src='https://dummyimage.com/700x250/dee2e6/6c757d.jpg'/>
                        <Card.Body>
                            <Card.Subtitle className='text-muted small'>{post.createdAt}</Card.Subtitle>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                            <Button onClick={handleSubmit} variant='primary'>Gönderiye git →</Button>
                        </Card.Body>
                    </Card>
                );
            })
    );
}

export default Posts;