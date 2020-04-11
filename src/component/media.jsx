import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Media = (props) => {
    const { imgSrc, altImg, children } = props;
    return (
        <Fragment>
            <div className="media">
                <div className="media-img">
                    { imgSrc !== null ? <img src={imgSrc} alt={altImg} srcSet=""/> : null }
                </div>
                <div className="media-body">
                    { children }
                </div>
            </div>
        </Fragment>
    );
};

Media.propTypes = {
    imgSrc: PropTypes.string,
    altImg: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Media.defaultProps = {
    imgSrc: "",
    altImg: "",
    children: null
};

export default Media;
