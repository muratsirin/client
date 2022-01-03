import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Post from "./Post";
import Comments from "./Comments";
import {useParams} from "react-router-dom";
import {fetchPostWithID} from "../../redux/post/post-action-creators";
import {useDispatch} from "react-redux";
import MostPopularPosts from "../MostPopularPosts";
import Header from "../homepage/Header";

function PostPage() {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        async function fetchPost() {
            await dispatch(fetchPostWithID(params.id));
        }

        fetchPost();
    }, [params.id]);

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