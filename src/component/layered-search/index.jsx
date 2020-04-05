import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "@src/component/input";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SvgIcon from '@material-ui/core/SvgIcon';

const mapStateToProps = state => {
    return {
        layeredSearchForm: state.layeredSearchForm
    };
};


const Render = (props) => {
    // var data = [];
    const history = useHistory();
    const { layeredSearchForm } = props;
    const [dataForm, updateDataForm] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataForm);
    };

    const handleInputChange = (event) => {
        var $key = event.target.name;
        var $value = event.target.value;
        updateDataForm({
            ...dataForm,
            [$key]: $value
        });
        console.log(dataForm);
    };

    return (
        <Fragment>
            <div className="layered-search">
                <form onSubmit={(event) => {return handleSubmit(event);}} >
                    <div className="layered-search-header">
                        <div className="clearfix">
                            <div className="float-left mr-3">
                                <ArrowBackIcon onClick={() => { history.goBack(); }}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                    </SvgIcon>
                                </ArrowBackIcon>
                            </div>
                            <h5 className="page-title">Filter Pencarian</h5>
                        </div>
                    </div>
                    <div className="layered-search-body">
                        { layeredSearchForm.map((res, i) => {
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
                                                                onChange={handleInputChange}
                                                                className="form-control"
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
                        }) }
                    </div>
                    <div className="layered-search-footer">
                        <div className="card">
                            <div className="card-body">
                                <button type="submit" className="btn btn-block btn-warning py-3">Cari</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
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
