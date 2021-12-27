import React, {useState} from "react";
import {Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import ReUsableModal from "../ReUsableModal";
import {useDispatch, useSelector} from "react-redux";
import {hidePostModal} from "../../redux/modal/modal-action-creators";
import {addPost, fetchPosts} from "../../redux/post/post-action-creators";

function AddPost() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.auth);
    const modalSelector = useSelector((state) => state.modal);
    const [post, setPost] = useState({
        title: '',
        content: '',
        user: userSelector.currentUser && userSelector.currentUser.id,
    });

    const handleHidePostModal = () => dispatch(hidePostModal());

    function handleChange(event) {
        const {name, value} = event.target;

        setPost((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('ObjectId('+userSelector.currentUser.id+')');
        dispatch(addPost(post));
    }

    function modalBody() {
        return (
            <Form>
                <FormGroup label='Gönderi Başlık' type='text' name='title' value={post.title}
                           onChange={handleChange}
                           placeholder='Başlık'/>
                <FormGroup label='Gönderi İçeriği' type='text' name='content' value={post.content}
                           onChange={handleChange}
                           placeholder='Ne düşünüyorsun?' as='textarea' rows={3}/>
            </Form>
        )
    }

    return (
        <ReUsableModal show={modalSelector.postModal} hide={handleHidePostModal} handleCancel={handleHidePostModal} handleSubmit={handleSubmit}
                       btnText='Paylaş' title='Yeni gönderi oluştur' body={modalBody()}/>
    )
}

export default AddPost;