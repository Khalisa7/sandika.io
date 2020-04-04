import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LayeredSearch from "@src/component/layered-search";
import ProductGrid from "@src/component/product-grid";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    const urlParams = new URLSearchParams(useLocation().search);
    const query = urlParams.get("search");

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
                        className="catalog-section catalog-search">
                        <LayeredSearch/>
                    </div>
                    <div className="catalog-section catalog-product">
                        <ProductGrid query={query}/>
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
