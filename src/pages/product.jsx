import React, { Fragment } from "react";
import PropTypes from "prop-types";
import OwlSlider from "@src/component/owl-carousel";
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from "@material-ui/icons/Favorite";
import SvgIcon from '@material-ui/core/SvgIcon';
import { connect } from "react-redux";

const mapStateToProps = ({ frontend }) => {
    return {
        productImage: frontend.productImage
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
                        <div className="section product-info-section">
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
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                            </div>
                            <div className="product-brand">
                                <h5>Lorem ipsum</h5>
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
                        <div className="section product-color">
                            <div className="section-title">
                                <p>Warna</p>
                            </div>
                            <div className="section-content">
                                <div className="form-row align-items-center">
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_color"
                                            id="rb_color_1"
                                            value="merah"
                                        />
                                        <label className="form-check-label" htmlFor="rb_color_1">
                                            <span className="color-box" style={{ backgroundColor: 'red' }}/>
                                            <span className="color-label">Merah</span>
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_color"
                                            id="rb_color_2"
                                            value="biru"
                                        />
                                        <label className="form-check-label" htmlFor="rb_color_2">
                                            <span className="color-box" style={{ backgroundColor: 'blue' }}/>
                                            <span className="color-label">Biru</span>
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_color"
                                            id="rb_color_3"
                                            value="hijau"
                                        />
                                        <label className="form-check-label" htmlFor="rb_color_3">
                                            <span className="color-box" style={{ backgroundColor: 'green' }}/>
                                            <span className="color-label">Hijau</span>
                                        </label>
                                    </div>
                                </div>
                                <small id="emailHelp" className="form-text text-muted">
                                    Masukan warna<br/>yang diinginkan
                                </small>
                            </div>
                        </div>
                        <div className="section product-size">
                            <div className="section-title">
                                <p>Ukuran</p>
                            </div>
                            <div className="section-content">
                                <div className="form-row align-items-center">
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_size"
                                            id="rb_size_1"
                                            value="merah"
                                        />
                                        <label className="form-check-label" htmlFor="rb_size_1">
                                            XL
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_size"
                                            id="rb_size_2"
                                            value="biru"
                                        />
                                        <label className="form-check-label" htmlFor="rb_size_2">
                                            L
                                        </label>
                                    </div>
                                    <div className="form-check mr-2">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="rb_size"
                                            id="rb_size_3"
                                            value="hijau"
                                        />
                                        <label className="form-check-label" htmlFor="rb_size_3">
                                            M
                                        </label>
                                    </div>
                                </div>
                                <small id="emailHelp" className="form-text text-muted">
                                    Masukan warna<br/>yang diinginkan
                                </small>
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

                <div className="detail-info-wrapper">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"><h5>Deskripsi</h5></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"><h5>Ulasan</h5></a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab">
                            <p>
                                DECAL HASQUVARA KLX BF CRF KTM KSR dll Premium Laminasi Tebal + 3M<br/>
                                <br/>
                                Tersedia utk SEMUA type motor trail seperti KLX BF CRF KTM dll, apabila type
                                motor yg di sebutkan tidak ada bisa lakukan diskusi utk pengecekan pola body
                                nya, dan body yg sudah di ganti seperti body GORDON hampir semua type ada
                                jadi silahkan di diskusikan saja.Tersedia utk SEMUA type motor trail seperti
                                KLX BF CRF KTM dll, apabila type motor yg di sebutkan tidak ada bisa
                                lakukan diskusi utk pengecekan pola body nya, dan body yg sudah di ganti
                                seperti body GORDON hampir semua type ada
                                jadi silahkan di diskusikan saja.<br/>
                                <br/>
                                Bahan menggunakan stiker 3M laminasi tebal anti gores, hasil print
                                High Resolution menggunakan mesin MIMAKI JEPANG dengan tinta
                                ORIGINAL untuk hasil yg maximal. Silahkan tanya" utk desain dan
                                type motor yang di inginkan.Bahan menggunakan stiker 3M laminasi tebal anti gores,
                                hasil print High Resolution menggunakan mesin MIMAKI JEPANG dengan tinta
                                ORIGINAL untuk hasil yg maximal. Silahkan tanya" utk desain dan
                                type motor yang di inginkan.<br/>
                                <br/>
                                Selamat berbelanja<br/>
                                Jangan lupa Follow IG kami @nineproductionbdg<br/>
                                untuk desain bisa chat via WA 081220459994<br/>
                                transaksi via tokopedia<br/>
                            </p>
                        </div>
                        <div className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">...</div>
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
