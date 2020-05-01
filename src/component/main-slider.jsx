import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OwlSlider from "@src/component/owl-carousel";

const MainSlider = (props) => {
    const { images, options } = props;

    return (
        <Fragment>
            <div className="container banner-wrapper">
                <OwlSlider options={options}>
                    {images.map((res, i) => {
                        return (
                            <div className="owl-image" key={i}>
                                <picture>
                                    <source
                                        media="(min-width: 650px)"
                                        srcSet={res._desktop} />
                                    <source
                                        media="(max-width: 465px)"
                                        srcSet={res._mobile} />
                                    <img src={res._desktop} alt="a cute kitten" />
                                </picture>
                            </div>
                        );
                    })}
                </OwlSlider>
            </div>
        </Fragment>
    );
};

MainSlider.defaultProps = {
    images: [],
    options: {}
};

MainSlider.propTypes = {
    images: PropTypes.array,
    options: PropTypes.object
};

export default MainSlider;
