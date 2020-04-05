import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    return (
        <Fragment>
            <div className="page page-detail-product">
                <div className="detail-product-title">
                    <div className="detail-product-caption">
                        <h3>Cari Barang Yang Kamu Inginkan</h3>
                        <h2>Sandika.IO</h2>
                    </div>
                </div>
                <div className="detail-product-wrapper">
                    <div
                        className="detail-product-section catalog-search">
                        sd
                    </div>
                    <div className="detail-product-section catalog-product">
                        sd
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const DetailProduct = connect(mapStateToProps)(Render);

Render.propTypes = {
    cateoryIcon: PropTypes.array
};

Render.defaultProps = {
    cateoryIcon: []
};

export default DetailProduct;
