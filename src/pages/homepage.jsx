import React, { Fragment } from "react";
import OwlSlider from "@src/component/owl-carousel";
import Media from "@src/component/media";
import MainSlider from "@src/component/main-slider";
import ProductSlider from "@src/component/product-slider";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import config from "@src/pages/settings.json";

const mapStateToProps = ({ home }) => {
    return {
        mainBanner: home.mainBanner,
        cateoryIcon: home.cateoryIcon
    };
};

const Render = (props) => {
    const { mainBanner, cateoryIcon } = props;
    const { configIndexIndex } = config;
    return (
        <Fragment>
            <div className="page page-home">
                <div className="home-slider">
                    <MainSlider
                        images={mainBanner}
                        options={configIndexIndex.bannerOptions}
                    />
                </div>
                <div className="home-category-media">
                    <div className="container block-category">
                        <div className="block-content">
                            <OwlSlider options={configIndexIndex.categoryOptions}>
                                { cateoryIcon.map((res, i) => {
                                    return (
                                        <Media key={i} imgSrc={res._icon_img} children={res._label} />
                                    );
                                }) }
                            </OwlSlider>
                        </div>
                    </div>
                </div>
                <div className="home-product-list">
                    <ProductSlider
                        title="Promosi Minggu Ini"
                        product={cateoryIcon}
                        options={configIndexIndex.productOptions}
                    />
                </div>
                <div className="home-product-list">
                    <ProductSlider
                        title="Promosi Minggu Ini"
                        product={cateoryIcon}
                        options={configIndexIndex.productOptions}
                    />
                </div>
                <div className="home-product-list">
                    <ProductSlider
                        title="Promosi Minggu Ini"
                        product={cateoryIcon}
                        options={configIndexIndex.productOptions}
                    />
                </div>
                <div className="home-product-list">
                    <ProductSlider
                        title="Promosi Minggu Ini"
                        product={cateoryIcon}
                        options={configIndexIndex.productOptions}
                    />
                </div>
            </div>
        </Fragment>
    );
};


const Homepage = connect(mapStateToProps)(Render);

Render.propTypes = {
    mainBanner: PropTypes.array,
    cateoryIcon: PropTypes.array
};

Render.defaultProps = {
    mainBanner: [],
    cateoryIcon: []
};

export default Homepage;
