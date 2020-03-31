import React, { Fragment, useState } from "react";
import Input from "@src/component/input";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        layeredSearchForm: state.layeredSearchForm
    };
};


const Render = (props) => {
    // var data = [];
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
            <div className="clearfix">
                <h5 className="page-title mb-3">Filter Pencarian</h5>
            </div>
            <form onSubmit={(event) => {return handleSubmit(event);}} >
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
                <div className="card">
                    <div className="card-body">
                        <button type="submit" className="btn btn-block btn-warning py-3">Cari</button>
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
