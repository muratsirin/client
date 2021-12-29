import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormGroup from "../FormGroup";
import {addComment} from "../../redux/post/post-action-creators";

function Comments() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.auth);
    const postID = useSelector(state => state.post.post._id);
    const comments = useSelector((state) => state.post.post.comments);
    const [comment, setComment] = useState({
        comment: '',
        user: ''
    });

    function handleSubmit(event) {
        console.log(comment)
        dispatch(addComment(postID, comment));
    }

    return (
        <div>
            <Form>
                <FormGroup type='text' name='comment' value={comment.comment}
                           onChange={(event) => setComment({comment: event.target.value, user: userSelector.currentUser && userSelector.currentUser.id})}
                           placeholder='Yorum yaz...' as='textarea' rows={3}/>
                <div className='text-end'>
                    <Button onClick={handleSubmit} variant='success'>Paylaş</Button>
                </div>
            </Form>

            {comments.length ?
                <div>
                    <h4>Yorumlar</h4>
                    <Card className='mb-4'>
                        {comments.map(comment=>{
                            return (
                                <Card.Body key={comment._id}>
                                    <Card.Text>{comment.comment}</Card.Text>
                                    <Card.Subtitle className='text-end small'>
                                        <div>
                                            {comment.createdAt}
                                            <h6>{comment.user.firstName + ' ' + comment.user.lastName}</h6>
                                        </div>
                                    </Card.Subtitle>
                                    {comments.length > 1 &&
                                    <hr/> }
                                </Card.Body>
                            );
                        })}
                    </Card>
                </div> : <h5 className='text-center'>Bu gönderiye ait yorum bulunamadı.</h5>}
        </div>
    )
}

export default Comments;