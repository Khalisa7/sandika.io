import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductItem from "@src/component/product-item";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        cateoryIcon: state.cateoryIcon
    };
};

const Render = (props) => {
    const { cateoryIcon } = props;
    return (
        <Fragment>
            <div className="product-grid-container">
                <div className="toolbar toolbar-search">
                    <div className="clearfix mb-2">
                        <div className="dropdown float-right">
                            <button className="btn dropdown-toggle"
                                type="button"
                                id="btnSort"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Sort Product
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnSort">
                                <a className="dropdown-item" href="#">Dari Termurah</a>
                                <a className="dropdown-item" href="#">Dari Termahal</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-grid">
                    { cateoryIcon.map((res, i) => {
                        return (
                            <ProductItem key={i} icon={res._icon_img} label={res._label} />
                        );
                    }) }
                    { cateoryIcon.map((res, i) => {
                        return (
                            <ProductItem key={i} icon={res._icon_img} label={res._label} />
                        );
                    }) }
                    { cateoryIcon.map((res, i) => {
                        return (
                            <ProductItem key={i} icon={res._icon_img} label={res._label} />
                        );
                    }) }
                </div>
                <div className="toolbar toolbar-pagination">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">3</a>
                        </li>
                    </ul>
                </div>
                <div className="toolbar toolbar-filter">
                    <div className="fixed-bottom">
                        <Link to="/filter">
                            <button type="button"
                                className="btn">Filter</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const ProductGrid = connect(mapStateToProps)(Render);

Render.defaulProps = {
    filterClick: null,
    cateoryIcon: []
};

Render.propTypes = {
    filterClick: PropTypes.func,
    cateoryIcon: PropTypes.array
};

export default ProductGrid;
