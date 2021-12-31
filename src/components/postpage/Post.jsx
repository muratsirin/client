import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPostWithID} from "../../redux/post/post-action-creators";
import PostImage from "../Image";
import CardSubtitle from "../CardSubtitle";

function Post() {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post);
    const params = useParams();

    useEffect(()=>{
        async function fetchPost(){
            await dispatch(fetchPostWithID(params.id));
        }
        fetchPost();
    }, [params.id]);

    return (
        <div className='my-4'>
            <h1>{post.title}</h1>
            <Card>
                {post.image &&
                <PostImage imageData={post.image.img.data} mimeType={post.image.img.mimeType}/>}
                <Card.Body>
                    <Card.Text>{post.content}</Card.Text>
                    <CardSubtitle createdAt={post.createdAt} updatedAt={post.updatedAt}
                                  firstName={post.user.firstName} lastName={post.user.lastName}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;