import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LayeredSearch from "@src/component/layered-search";
import ProductGrid from "@src/component/product-grid";
import { useState } from "react";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    const [filterFormState, setFilterFormState] = useState(false);
    const urlParams = new URLSearchParams(useLocation().search);
    const query = urlParams.get("search");

    useEffect(() => {
        return filterFormState ?
            document.body.classList.add("no-scroll") :
            document.body.classList.remove("no-scroll");
    });

    return (
        <Fragment>
            <div className="page page-catalog">
                <div className="catalog-banner">
                    <div className="catalog-caption">
                        <h3>Cari Barang Yang Kamu Inginkan</h3>
                        <h2>Sandika.IO</h2>
                    </div>
                </div>
                <div className="catalog-wrapper">
                    <div
                        className={filterFormState ?
                            "catalog-section catalog-search active" : "catalog-section catalog-search"}>
                        <LayeredSearch
                            active={filterFormState}
                            filterClick={() => {return setFilterFormState(!filterFormState);}}/>
                    </div>
                    <div className="catalog-section catalog-product">
                        <ProductGrid
                            query={query}
                            filterClick={() => {return setFilterFormState(!filterFormState);}}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const Catalog = connect(mapStateToProps)(Render);

Render.propTypes = {
    cateoryIcon: PropTypes.array
};

Render.defaultProps = {
    cateoryIcon: []
};

export default Catalog;
