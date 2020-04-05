import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Content = (props) => {
    const { children } = props;
    return (
        <Fragment>
            <div className="content">
                {children}
            </div>
        </Fragment>
    );
};

Content.defaultProps = {
    children: null
};

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Content;
