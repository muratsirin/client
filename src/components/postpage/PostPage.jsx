import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Post from "./Post";
import Comments from "./Comments";

function PostPage(){
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={10}>
                        <Post/>
                        <Comments/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PostPage;