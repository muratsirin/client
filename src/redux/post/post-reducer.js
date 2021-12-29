import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    GET_POST_REQUEST,
    GET_POST_SUCCESS, GET_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from "./post-action-types";

const initState = {
    posts: [],
    post:'',
    loading: true,
    error: ''
};

function postReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
        case ADD_POST_REQUEST:
        case GET_POST_REQUEST:
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case ADD_POST_SUCCESS:
        case GET_POST_SUCCESS:
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case FETCH_POSTS_FAILURE:
        case ADD_POST_FAILURE:
        case GET_POST_FAILURE:
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;