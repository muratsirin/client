import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function MostPopularPosts() {
    const posts = useSelector(state => state.post.posts);
    return (
        <Card className='mb-4'>
            <Card.Header>En Popüler Gönderiler</Card.Header>
            <Card.Body>
                <ListGroup>
                    {posts.filter(post => {
                        return post.comments?.length > 3 && post;
                    }).slice(0, 10).map((post, index) => {
                        return (
                            <ListGroup.Item key={index}><Link
                                to={'/post/' + post._id}>{post.title}</Link></ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default MostPopularPosts;