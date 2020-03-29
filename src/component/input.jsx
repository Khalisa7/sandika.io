import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Input = (props) => {
    const { type, required, value, onChange, name, id } = props;
    return (
        <Fragment>
            <input
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                name={name}
                id={id}
            />
        </Fragment>
    );
};

Input.defaultProps = {
    type: "text",
    required: false,
    value: "",
    onChange: null,
    name: "",
    id: ""
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    id: PropTypes.string
};

export default Input;
