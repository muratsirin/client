import React, {useEffect} from "react";
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPostWithID} from "../../redux/post/post-action-creators";
import PostImage from "../Image";

function Post() {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post);
    const author = useSelector(state => state.post.post.user);
    const params = useParams();

    useEffect(async () => {
        if (params.id !== post._id) {
            await dispatch(fetchPostWithID(params.id));
        }
    }, []);

    return (
        <div className='my-4'>
            <h1>{post.title}</h1>
            <Card>
                {post.image &&
                <PostImage imageData={post.image.img.data} mimeType={post.image.img.mimeType}/>}
                <Card.Body>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Subtitle className='text-end small'>
                        <div>
                            {post.updatedAt ? post.updatedAt : post.createdAt}
                            {/*<h6>{author.firstName + ' ' + author.lastName}</h6>*/}
                        </div>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;