import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LayeredSearch from "@src/component/layered-search";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    let query = new URLSearchParams(useLocation().search);
    console.log(query.get("search"), query.get("cat"));
    return (
        <Fragment>
            <div className="page page-catalog">
                <div className="catalog-wrapper">
                    <div className="catalog-section catalog-search">
                        <LayeredSearch/>
                    </div>
                    <div className="catalog-section catalog-product">
                        hai
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
