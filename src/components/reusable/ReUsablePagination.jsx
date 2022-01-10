import React from "react";
import ReactPaginate from "react-paginate";

function ReUsablePagination(props){
    return (
        <div className='d-flex justify-content-center'>
            <ReactPaginate
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-link'
                nextClassName='page-link'
                previousLabel='<'
                nextLabel='>'
                pageCount={props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={props.onPageChange}
                containerClassName='pagination'
                activeClassName='active'/>
        </div>
    );
}

export default ReUsablePagination;