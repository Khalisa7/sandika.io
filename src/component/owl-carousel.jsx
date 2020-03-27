import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import PropTypes from "prop-types";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const OwlSlider = (props) => {
    const { options, children } = props;
    return (
        <Fragment>
            <OwlCarousel
                className="owl-theme"
                {...options}
            >
                {children}
            </OwlCarousel>
        </Fragment>
    );
};

OwlSlider.defaultProps = {
    options: {},
    children: null
};

OwlSlider.propTypes = {
    options: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default OwlSlider;
