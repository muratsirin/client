import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import Loader from 'react-loader-spinner';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostImage from "../Image";
import CardSubtitle from "../CardSubtitle";
import ReUsablePagination from "../ReUsablePagination";
import {fetchPostWithID} from "../../redux/post/post-action-creators";

function Posts() {
    const dispatch = useDispatch();
    const postSelector = useSelector((state) => state.post);
    const searchFilter = useSelector(state => state.post.searchFilter);
    const perPage = 5;
    const [pageCount, setPageCount] = useState(0);
    const [posts, setPosts] = useState(postSelector.posts);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setPosts(postSelector.posts.slice(offset, offset + perPage));
        setPageCount(Math.ceil(postSelector.posts.length / perPage));
    }, [offset, perPage]);

    const handlePageChange = (event) => {
        const newOffset = (event.selected * perPage) % postSelector.posts.length;
        setOffset(newOffset);
    }

    return (
        postSelector.loading ? <Loader className='text-center mb-4' type="Oval" color="#f5ba13"/>
            : <div>
                {posts.filter(post => {
                    if (searchFilter === '') {
                        return post;
                    } else if (post.title.toLowerCase().includes(searchFilter.toLowerCase()) || post.content.toLowerCase().includes(searchFilter.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => {
                    return (
                        <Card key={index} className='mb-4'>
                            {post.image &&
                            <PostImage imageData={post.image.img.data} mimeType={post.image.img.mimeType}/>}
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                                <Link to={'/post/' + post._id}>
                                    <Button onClick={async () => await dispatch(fetchPostWithID(post._id))} variant='primary'>Gönderiyi gör</Button>
                                </Link>
                                <CardSubtitle createdAt={post.createdAt} updatedAt={post.updatedAt}
                                              firstName={post.user.firstName} lastName={post.user.lastName}/>
                            </Card.Body>
                        </Card>
                    );
                })}

                <ReUsablePagination pageCount={pageCount} onPageChange={handlePageChange}/>
            </div>
    );
}

export default Posts;