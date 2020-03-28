import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    return (
        <Fragment>
            <div className="page page-catalog">
                <div className="catalog-wrapper">
                    <div className="catalog-section catalog-search">
                        <h5 className="page-title mb-3">Filter Pencarian</h5>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0"
                                    data-toggle="collapse"
                                    data-target="#filterSection1"
                                    aria-expanded="false"
                                    aria-controls="filterSection1">
                                    Kategori
                                </h6>
                            </div>
                            <div className="collapse" id="filterSection1">
                                <div className="card-body">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                        life accusamus terry richardson ad squid.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes
                                        anderson cred nesciunt sapiente ea proident.
                                    </p>
                                </div>
                            </div>
                        </div>
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
