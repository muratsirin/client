import React, {useEffect, useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormGroup from "../reusable/FormGroup";
import CardSubtitle from "../reusable/CardSubtitle";
import ReUsablePagination from "../reusable/ReUsablePagination";
import {addComment} from "../../redux/post/actions/addComment";

function Comments() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.auth);
    const postID = useSelector(state => state.post.post._id);
    const postSelector = useSelector((state) => state.post.post);
    const perPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const [comments, setComments] = useState(useSelector((state) => state.post.post.comments));
    const [offset, setOffset] = useState(0);
    const [comment, setComment] = useState({
        comment: '',
        user: ''
    });

    useEffect(() => {
        setComments(postSelector.comments.slice(offset, offset + perPage));
        setPageCount(Math.ceil(postSelector.comments.length / perPage));
    }, [offset, perPage, postSelector]);

    const handlePageChange = (event) => {
        const newOffset = (event.selected * perPage) % postSelector.comments.length;
        setOffset(newOffset);
    }

    const handleAddPost = () => {
        dispatch(addComment(postID, comment));
    }

    return (
        <div>
            {userSelector.isLoggedIn ? <Form>
                <FormGroup type='text' name='comment' value={comment.comment}
                           onChange={(event) => setComment({
                               comment: event.target.value,
                               user: userSelector.currentUser._id
                           })}
                           placeholder='Yorum yaz...' as='textarea' rows={3}/>
                <div className='text-end'>
                    <Button onClick={handleAddPost} variant='success'>Paylaş</Button>
                </div>
            </Form> : <p className='text-center'>Yorum yazabilmek için giriş yapmalısınız.</p>}

            {comments?.length ?
                <div>
                    <h4>Yorumlar</h4>
                    <Card className='mb-4'>
                        {comments.map((comment, index) => {
                            return (
                                <Card.Body key={index}>
                                    <Card.Text>{comment.comment}</Card.Text>
                                    <CardSubtitle createdAt={comment.createdAt} updatedAt={comment.updatedAt}
                                                  firstName={comment?.user.firstName} lastName={comment?.user.lastName}/>
                                    <hr/>
                                </Card.Body>
                            );
                        })}
                    </Card>
                </div> : <h5 className='text-center'>Bu gönderiye ait yorum bulunamadı.</h5>}
            <ReUsablePagination pageCount={pageCount} onPageChange={handlePageChange}/>
        </div>
    )
}

export default Comments;