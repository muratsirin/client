import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "./post-action-types";

const initState = {
    posts: {},
    loading: true,
    error: ''
};

function postReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
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
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return {...state};
    }
}

export default postReducer;