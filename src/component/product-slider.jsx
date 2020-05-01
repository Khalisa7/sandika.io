import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OwlSlider from "@src/component/owl-carousel";
import ProductItem from "@src/component/product-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductSlider = (props) => {
    const { title, url, options, product } = props;

    return (
        <Fragment>
            <div className="container block-category-product">
                <div className="block-content">
                    <div className="section-title mb-2">
                        <div className="clearfix">
                            <h6 className="float-left">{title}</h6>
                            <a href={url} className="float-right">Lihat Semua
                                <FontAwesomeIcon icon={faChevronRight} className="ml-3"/>
                            </a>
                        </div>
                    </div>
                    <OwlSlider options={options}>
                        { product.map((res, i) => {
                            return (
                                <ProductItem key={i} icon={res._icon_img} label={res._label} />
                            );
                        }) }
                    </OwlSlider>
                </div>
            </div>
        </Fragment>
    );
};

ProductSlider.defaultProps = {
    title: "Category Product Slider",
    url: "#",
    options: {},
    product: []
};

ProductSlider.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    options: PropTypes.object,
    product: PropTypes.array
};

export default ProductSlider;
