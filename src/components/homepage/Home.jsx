import React, {useEffect, useState} from "react";
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import Posts from "./Posts";
import Categories from "./Categories";
import {postService} from "../../services/post-service";

function Home(){
    const [post, setPost] = useState();

    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg={10}>
                        <Posts/>
                    </Col>
                    <Col lg={2}>
                        <Categories/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;