import {GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS} from "../post-action-types";
import {postService} from "../../../services/post-service";

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

export function fetchPostWithID(id) {
    return function (dispatch) {
        dispatch(fetchPostRequest());
        postService.getPostWithID(id).then(post => {
            dispatch(fetchPostSuccess(post));
        }).catch(error => {
            dispatch(fetchPostFailure(error));
        });
    };
}