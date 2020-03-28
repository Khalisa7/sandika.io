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
                            <div className="collapse show" id="filterSection1">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_category" id="cb_category_1"/>
                                            <label htmlFor="cb_category_1">Cras justo odio</label>
                                            <span className="badge badge-pill">14</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_category" id="cb_category_2"/>
                                            <label htmlFor="cb_category_2">Dapibus ac facilisis in</label>
                                            <span className="badge badge-pill">12</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_category" id="cb_category_3"/>
                                            <label htmlFor="cb_category_3">Morbi leo risus</label>
                                            <span className="badge badge-pill">4</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_category" id="cb_category_4"/>
                                            <label htmlFor="cb_category_4">Porta ac consectetur ac</label>
                                            <span className="badge badge-pill">27</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_category" id="cb_category_5"/>
                                            <label htmlFor="cb_category_5">Vestibulum at eros</label>
                                            <span className="badge badge-pill">2</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0"
                                    data-toggle="collapse"
                                    data-target="#filterSection2"
                                    aria-expanded="false"
                                    aria-controls="filterSection2">
                                    Merk
                                </h6>
                            </div>
                            <div className="collapse show" id="filterSection2">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_merk" id="cb_merk_1"/>
                                            <label htmlFor="cb_merk_1">Cras justo odio</label>
                                            <span className="badge badge-pill">14</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_merk" id="cb_merk_2"/>
                                            <label htmlFor="cb_merk_2">Dapibus ac facilisis in</label>
                                            <span className="badge badge-pill">12</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_merk" id="cb_merk_3"/>
                                            <label htmlFor="cb_merk_3">Morbi leo risus</label>
                                            <span className="badge badge-pill">4</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_merk" id="cb_merk_4"/>
                                            <label htmlFor="cb_merk_4">Porta ac consectetur ac</label>
                                            <span className="badge badge-pill">27</span>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="checkbox" name="cb_merk" id="cb_merk_5"/>
                                            <label htmlFor="cb_merk_5">Vestibulum at eros</label>
                                            <span className="badge badge-pill">2</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h6 className="mb-0"
                                    data-toggle="collapse"
                                    data-target="#filterSection3"
                                    aria-expanded="false"
                                    aria-controls="filterSection3">
                                    Harga
                                </h6>
                            </div>
                            <div className="collapse show" id="filterSection3">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <input type="radio" name="cb_merk" id="cb_harga_1"/>
                                            <label htmlFor="cb_harga_1">Rp 10.000.000,00 - Rp 20.000.000,00</label>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="radio" name="cb_merk" id="cb_harga_2"/>
                                            <label htmlFor="cb_harga_2">Rp 5.000.000,00 - Rp 10.000.000,00</label>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="radio" name="cb_merk" id="cb_harga_3"/>
                                            <label htmlFor="cb_harga_3">Rp 1.000.000,00 - Rp 5.000.000,00</label>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="radio" name="cb_merk" id="cb_harga_4"/>
                                            <label htmlFor="cb_harga_4">Rp 500.000,00 - Rp 1.000.000,00</label>
                                        </li>
                                        <li className="list-group-item">
                                            <input type="radio" name="cb_merk" id="cb_harga_5"/>
                                            <label htmlFor="cb_harga_5">Rp 0 - Rp 500.000,00</label>
                                        </li>
                                    </ul>
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
