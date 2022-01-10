import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import Post from "./Post";
import Comments from "./Comments";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPostWithID} from "../../redux/post/actions/fetchPost";

function PostPage() {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        async function fetchPost() {
            await dispatch(fetchPostWithID(params.id));
        }
        fetchPost();
    }, [params.id, dispatch]);

    return (
        <div>
            <Container>
                <Post/>
                <Comments/>
            </Container>
        </div>
    );
}

export default PostPage;