import React, { Fragment } from "react";
import Input from "@src/component/input";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        layeredSearchForm: state.layeredSearchForm
    };
};

const Render = (props) => {
    const { layeredSearchForm } = props;
    return (
        <Fragment>
            <form>
                <h5 className="page-title mb-3">Filter Pencarian</h5>
                { layeredSearchForm.map((res, i) => {
                    if (res._type === "category") {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    <h6 className="mb-0"
                                        data-toggle="collapse"
                                        data-target={"#filterSection" + i}
                                        aria-expanded="false"
                                        aria-controls={"filterSection" + i}>
                                        {res._title}
                                    </h6>
                                </div>
                                <div className="collapse show" id={"filterSection" + i}>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            { res._form.map((res, i) => {
                                                return (
                                                    <li className="list-group-item" key={i}>
                                                        <Input type={res._type}
                                                            name={res._name}
                                                            id={res._name + i}
                                                            value={res._value}
                                                        />
                                                        <label htmlFor={res._name + i}>{res._label}</label>
                                                        <span className="badge badge-pill">{res._badge}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (res._type === "price") {
                        return (
                            <div className="card" key={i}>
                                <div className="card-header">
                                    <h6 className="mb-0"
                                        data-toggle="collapse"
                                        data-target={"#filterSection" + i}
                                        aria-expanded="false"
                                        aria-controls={"filterSection" + i}>
                                        {res._title}
                                    </h6>
                                </div>
                                <div className="collapse show" id={"filterSection" + i}>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            { res._form.map((res, i) => {
                                                return (
                                                    <li className="list-group-item" key={i}>
                                                        <Input type={res._type}
                                                            name={res._name}
                                                            id={res._name + i}
                                                            value={res._value}
                                                        />
                                                        <label htmlFor={res._name + i}>{res._label}</label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }) }
                <div className="card">
                    <div className="card-body">
                        <button type="submit" className="btn btn-block btn-warning">Cari</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

Render.defaultProps = {
    layeredSearchForm: []
};

Render.propTypes = {
    layeredSearchForm: PropTypes.array
};

const LayeredSearch = connect(mapStateToProps)(Render);

export default LayeredSearch;
