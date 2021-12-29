import {postService} from "../../services/post-service";
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, ADD_COMMENT_REQUEST,
} from "./post-action-types";

function fetchPostsRequest() {
    return {
        type: FETCH_POSTS_REQUEST,
    };
}

function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts,
    };
}

function fetchPostsFailure(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    };
}

function fetchPosts() {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        postService.getPosts().then(posts => {
            dispatch(fetchPostsSuccess(posts));
        }).catch(error => {
            dispatch(fetchPostsFailure(error));
        });
    };
}

function addPostRequest() {
    return {
        type: ADD_POST_REQUEST,
    };
}

function addPostSuccess(post) {
    return {
        type: ADD_POST_SUCCESS,
        payload: post
    };
}

function addPostFailure(error) {
    return {
        type: ADD_POST_FAILURE,
        payload: error
    };
}

function addPost(post) {
    return function (dispatch) {
        dispatch(addPostRequest());
        postService.addPost(post).then(resPost => {
            dispatch(addPostSuccess(resPost));
            dispatch(fetchPosts());
        }).catch(error => {
            dispatch(addPostFailure(error));
        });
    };
}

function fetchPostRequest() {
    return {
        type: GET_POST_REQUEST,
    };
}

function fetchPostSuccess(post) {
    return {
        type: GET_POST_SUCCESS,
        payload: post,
    };
}

function fetchPostFailure(error) {
    return {
        type: GET_POST_FAILURE,
        payload: error,
    };
}

function fetchPostWithID(id) {
    return async function (dispatch) {
        dispatch(fetchPostRequest());
        await postService.getPostWithID(id).then(post => {
            dispatch(fetchPostSuccess(post));
        }).catch(error => {
            dispatch(fetchPostFailure(error));
        });
    };
}

function addCommentRequest(){
    return {
        type: ADD_COMMENT_REQUEST,
    };
}

function addCommentSuccess(post){
    return {
        type: ADD_POST_SUCCESS,
        payload: post
    };
}

function addCommentFailure(error){
    return {
        type: ADD_POST_FAILURE,
        payload: error
    };
}

function addComment(id, comment){
    return function (dispatch){
        dispatch(addCommentRequest());
        postService.addComment(id, comment).then(post => {
            dispatch(addCommentSuccess(post));
        }).catch(error => {
            dispatch(addCommentFailure(error));
        });
    };
}


export {fetchPosts, addPost, fetchPostWithID, addComment};