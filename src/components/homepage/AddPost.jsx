import React, {useState} from "react";
import {Form} from "react-bootstrap";
import FormGroup from "../FormGroup";
import ReUsableModal from "../ReUsableModal";
import {useDispatch, useSelector} from "react-redux";
import {hidePostModal} from "../../redux/modal/modal-action-creators";
import {addPost} from "../../redux/post/post-action-creators";

function AddPost() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);
    const postModal = useSelector((state) => state.modal.postModal);
    const [post, setPost] = useState({
        title: '',
        content: '',
        user: currentUser && currentUser.id,
    });
    const [image, setImage] = useState('');

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
        dispatch(addPost(post, image));
    }

    function modalBody() {
        return (
            <Form>
                <FormGroup label='Resim seç' type='file' name='image'
                           onChange={(event) => setImage(event.target.files[0])}/>
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
        <ReUsableModal show={postModal} hide={handleHidePostModal} handleCancel={handleHidePostModal} handleSubmit={handleSubmit}
                       btnText='Paylaş' title='Yeni gönderi oluştur' body={modalBody()}/>
    )
}

export default AddPost;