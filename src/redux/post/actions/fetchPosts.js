import {FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS} from "../post-action-types";
import {postService} from "../../../services/post-service";

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

export function fetchPosts() {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        postService.getPosts().then(posts => {
            dispatch(fetchPostsSuccess(posts));
        }).catch(error => {
            dispatch(fetchPostsFailure(error));
        });
    };
}