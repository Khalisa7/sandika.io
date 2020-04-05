import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Media = (props) => {
    const { icon, label } = props;
    return (
        <Fragment>
            <div className="media">
                <div className="media-img">
                    { icon !== null ? <img src={icon} alt={label} srcSet=""/> : null }
                </div>
                <div className="media-body">
                    { label }
                </div>
            </div>
        </Fragment>
    );
};

Media.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
};

Media.defaultProps = {
    icon: "",
    label: ""
};

export default Media;
