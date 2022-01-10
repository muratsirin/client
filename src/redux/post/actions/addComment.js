import {ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS} from "../post-action-types";
import {postService} from "../../../services/post-service";

function addCommentRequest(){
    return {
        type: ADD_COMMENT_REQUEST,
    };
}

function addCommentSuccess(post){
    return {
        type: ADD_COMMENT_SUCCESS,
        payload: post
    };
}

function addCommentFailure(error){
    return {
        type: ADD_COMMENT_FAILURE,
        payload: error
    };
}

export function addComment(id, comment){
    return function (dispatch){
        dispatch(addCommentRequest());
        postService.addComment(id, comment).then(post => {
            dispatch(addCommentSuccess(post));
        }).catch(error => {
            dispatch(addCommentFailure(error));
        });
    };
}