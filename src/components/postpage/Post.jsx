import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useDispatch}  from "react-redux";
import {fetchPostWithID} from "../../redux/post/post-action-creators";

function Post() {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post);
    const author = useSelector(state => state.post.post.user);
    const params = useParams();
    useEffect(()=>{
        if (params.id !== post._id){
            dispatch(fetchPostWithID(params.id));
        }
    },[]);

    return (
        <div className='my-4'>
            <h1>{post.title}</h1>
            <Card>
                <Card.Img variant='top' src='https://dummyimage.com/700x250/dee2e6/6c757d.jpg'/>
                <Card.Body>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Subtitle className='text-end small'>
                        <div>
                            {post.updatedAt ? post.updatedAt : post.createdAt}
                            <h6>{author.firstName + ' ' + author.lastName}</h6>
                        </div>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;