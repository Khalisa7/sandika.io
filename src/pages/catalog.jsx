import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LayeredSearch from "@src/component/layered-search";
import ProductGrid from "@src/component/product-grid";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    // state
    const [filterState, setFilterState] = useState(false);
    const urlParams = new URLSearchParams(useLocation().search);
    const query = urlParams.get("search");

    const handleFilterClick = (value) => {
        setFilterState(value);
    };

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
                        className={filterState ?
                            "catalog-section catalog-search active" : "catalog-section catalog-search"}>
                        <LayeredSearch active={filterState} />
                    </div>
                    <div className="catalog-section catalog-product">
                        <ProductGrid query={query} handleFilter={handleFilterClick} />
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
