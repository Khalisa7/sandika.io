import React, { Fragment } from "react";
import SearchForm from "@src/component/search-form";
import SearchResult from "@src/component/search-result";

const Filter = (props) => {
    return (
        <Fragment>
            <div className="page page-search">
                <SearchForm/>
                <SearchResult/>
            </div>
        </Fragment>
    );
};

export default Filter;
