import {postService} from "../../services/post-service";
import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE} from "./post-action-types";

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
            console.log(posts);
            dispatch(fetchPostsSuccess(posts));
        }).catch(error => {
            dispatch(fetchPostsFailure(error));
        });
    };
}

function addPostRequest(){
    return {
        type: ADD_POST_REQUEST,
    };
}

function addPostSuccess(post){
    return {
        type: ADD_POST_SUCCESS,
        payload: post
    };
}

function addPostFailure(error){
    return {
        type: ADD_POST_FAILURE,
        payload: error
    };
}

function addPost(post){
    return function (dispatch){
        dispatch(addPostRequest());
        postService.addPost(post).then(resPost => {
            dispatch(addPostSuccess(resPost));
            dispatch(fetchPosts());
        }).catch(error => {
            dispatch(addPostFailure(error));
        });
    };
}


export {fetchPosts, addPost};