import {ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS} from "../post-action-types";
import {postService} from "../../../services/post-service";
import {fetchPosts} from "./fetchPosts";

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

export function addPost(post, image) {
    return function (dispatch) {
        dispatch(addPostRequest());
        postService.addPost(post, image).then(resPost => {
            dispatch(addPostSuccess(resPost));
            dispatch(fetchPosts());
        }).catch(error => {
            dispatch(addPostFailure(error));
        });
    };
}