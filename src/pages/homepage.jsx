import React, { Fragment } from "react";
import OwlSlider from "@src/component/owl-carousel";
import Media from "@src/component/media";
import ProductItem from "@src/component/product-item";
import interfaces from "@src/interfaces";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = state => {
    return { cateoryIcon: state.cateoryIcon };
};

const Render = (props) => {
    const { cateoryIcon } = props;
    const { bannerCarousel } = interfaces;
    const bannerOptions = {
        loop: true,
        margin: 10,
        nav: false,
        items: 2,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            480: {
                items: 2,
                margin: 20,
                stagePadding: 80
            }
        }
    };
    const categoryOptions = {
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 0,
                stagePadding: 10,
                center: true,
                loop: true
            },
            480: {
                loop: false,
                items: 4,
                margin: 0,
                autoWidth: true
            }
        }
    };
    const productOptions = {
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 0,
                stagePadding: 10,
                loop: true
            },
            480: {
                loop: false,
                items: 4,
                margin: 0
            },
            980: {
                loop: false,
                items: 5,
                margin: 0,
                nav: true
            },
            1366: {
                loop: false,
                items: 6,
                margin: 0,
                nav: true
            }
        }
    };

    return (
        <Fragment>
            <div className="page page-home">
                <div className="home-slider">
                    <div className="container banner-wrapper">
                        <OwlSlider options={bannerOptions}>
                            {bannerCarousel.map((res, i) => {
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
                </div>
                <div className="home-category-media">
                    <div className="container block-category">
                        <div className="block-content">
                            <OwlSlider options={categoryOptions}>
                                { cateoryIcon.map((res, i) => {
                                    return (
                                        <Media key={i} icon={res._icon_img} label={res._label} />
                                    );
                                }) }
                            </OwlSlider>
                        </div>
                    </div>
                </div>
                <div className="home-product-list">
                    <div className="container block-category-product">
                        <div className="block-content">
                            <div className="section-title mb-2">
                                <div className="clearfix">
                                    <h6 className="float-left">Promosi Minggu Ini</h6>
                                    <a href="#" className="float-right">Lihat Semua
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-3"/>
                                    </a>
                                </div>
                            </div>
                            <OwlSlider options={productOptions}>
                                { cateoryIcon.map((res, i) => {
                                    return (
                                        <ProductItem key={i} icon={res._icon_img} label={res._label} />
                                    );
                                }) }
                            </OwlSlider>
                        </div>
                    </div>
                </div>
                <div className="home-product-list">
                    <div className="container block-category-product">
                        <div className="block-content">
                            <div className="section-title mb-2">
                                <div className="clearfix">
                                    <h6 className="float-left">Produk Baru</h6>
                                    <a href="#" className="float-right">Lihat Semua
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-3"/>
                                    </a>
                                </div>
                            </div>
                            <OwlSlider options={productOptions}>
                                { cateoryIcon.map((res, i) => {
                                    return (
                                        <ProductItem key={i} icon={res._icon_img} label={res._label} />
                                    );
                                }) }
                            </OwlSlider>
                        </div>
                    </div>
                </div>
                <div className="home-product-list">
                    <div className="container block-category-product">
                        <div className="block-content">
                            <div className="section-title mb-2">
                                <div className="clearfix">
                                    <h6 className="float-left">Produk Segar</h6>
                                    <a href="#" className="float-right">Lihat Semua
                                        <FontAwesomeIcon icon={faChevronRight} className="ml-3"/>
                                    </a>
                                </div>
                            </div>
                            <OwlSlider options={productOptions}>
                                { cateoryIcon.map((res, i) => {
                                    return (
                                        <ProductItem key={i} icon={res._icon_img} label={res._label} />
                                    );
                                }) }
                            </OwlSlider>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const Homepage = connect(mapStateToProps)(Render);

Render.propTypes = {
    cateoryIcon: PropTypes.array
};

Render.defaultProps = {
    cateoryIcon: []
};

export default Homepage;
