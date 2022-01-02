import React from "react";
import {Form, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeSearchFilter} from "../redux/post/post-action-creators";

function SearchBar(){
    const dispatch = useDispatch();
    const searchFilter = useSelector(state => state.post.searchFilter);
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Gönderi ara"
                className="me-2"
                aria-label="Gönderi ara"
                value={searchFilter}
                onChange={event => dispatch(changeSearchFilter(event.target.value))}
            />
        </Form>
    )
}

export default SearchBar;