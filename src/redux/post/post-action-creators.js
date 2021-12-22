import {postService} from "../../services/post-service";
import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "./post-action-types";

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

export {fetchPosts};