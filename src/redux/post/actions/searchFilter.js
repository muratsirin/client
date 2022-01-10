import {CHANGE_SEARCH_FILTER} from "../post-action-types";

export function changeSearchFilter(searchFilter) {
    return {
        type: CHANGE_SEARCH_FILTER,
        payload: searchFilter,
    };
}