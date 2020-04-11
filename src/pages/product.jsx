import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OwlSlider from "@src/component/owl-carousel";
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from "@material-ui/icons/Favorite";
import SvgIcon from '@material-ui/core/SvgIcon';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        productImage: state.productImage
    };
};

const Render = (props) => {
    const { productImage } = props;
    const imageProductOptions = {
        loop: true,
        margin: 10,
        nav: false,
        items: 1
    };
    return (
        <Fragment>
            <div className="page page-detail-product">
                <div className="detail-product-wrapper">
                    <div className="detail-product-section product-image">
                        <OwlSlider options={imageProductOptions}>
                            {productImage.map((res, i) => {
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
                    <div className="detail-product-section product-info">
                        <div className="product-wishlist">
                            <button type="button" className="btn btn-wishlist">
                                <FavoriteIcon>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </FavoriteIcon>
                            </button>
                        </div>
                        <div className="product-sku">
                            <h6>SKU101210003</h6>
                        </div>
                        <div className="product-name">
                            <h4>HIMALAYAN CHARCOAL PURIFYING GLOW MASK 75ML</h4>
                        </div>
                        <div className="product-brand">
                            <h5>HIMALAYAN</h5>
                        </div>
                        <div className="product-rating">
                            <span className="product-rating-star">
                                <StarIcon fontSize={'small'}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </StarIcon>
                                <StarIcon fontSize={'small'}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </StarIcon>
                                <StarIcon fontSize={'small'}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </StarIcon>
                                <StarIcon fontSize={'small'}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </StarIcon>
                                <StarIcon fontSize={'small'}>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </StarIcon>
                            </span>
                            <span className="product-rating-reviews">
                                <p>(4) Reviews</p>
                            </span>
                        </div>
                        <div className="section product-price-wrapper">
                            <div className="section-title">
                                <p>Harga</p>
                            </div>
                            <div className="section-content">
                                <div className="label old-price">
                                    <p className="price">Rp 23.000,-</p>
                                </div>
                                <div className="label special-price">
                                    <p className="price">Rp 20.000,-</p>
                                </div>
                            </div>
                        </div>
                        <div className="section product-count-input">
                            <div className="section-title">
                                <p>Jumlah</p>
                            </div>
                            <div className="section-content">
                                <div className="form-row align-items-center">
                                    <div className="col-8 mb-2">
                                        <label className="sr-only">Jumlah pemesanan</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">-</div>
                                            </div>
                                            <input type="text" className="form-control"
                                                placeholder="Jumlah pemesanan" readOnly/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <small id="emailHelp" className="form-text text-muted">
                                    Masukan jumlah pembelian<br/>yang diinginkan
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


const Product = connect(mapStateToProps)(Render);

Render.propTypes = {
    productImage: PropTypes.array
};

Render.defaultProps = {
    productImage: []
};

export default Product;
