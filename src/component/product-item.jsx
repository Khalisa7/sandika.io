import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SvgIcon from "@material-ui/core/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "@src/component/addtocartbutton";

const ProductItem = (props) => {
    const { label, enableAddToCart } = props;
    return (
        <Fragment>
            <div className="product-item-wrapper">
                <div className="card">
                    <div className="card-img">
                        <img src="https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/2/25/6192606/6192606_64ba9b54-ebc1-4e5c-8bf9-d77b1abc292d_720_720.jpg.webp" />
                    </div>
                    <div className="card-body">
                        <small>
                            <FontAwesomeIcon icon={faStore} className="store mr-1"/>
                            Sandika Store</small>
                        <p className="product-name">{label}</p>
                        <p className="product-brand">Product Brand</p>
                        <div className="price-wrapper">
                            <div className="label old-price">
                                <p className="price">Rp 23.000,-</p>
                            </div>
                            <div className="label special-price">
                                <p className="price">Rp 20.000,-</p>
                            </div>
                        </div>
                    </div>
                    {enableAddToCart ? <AddToCartButton/> : null}
                    <div className="card-action-wishlist">
                        <button>
                            <FavoriteIcon fontSize={"small"}>
                                <SvgIcon>
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </SvgIcon>
                            </FavoriteIcon>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

ProductItem.defaultProps = {
    icon: "",
    label: "",
    enableAddToCart: false
};

ProductItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    enableAddToCart: PropTypes.bool
};

export default ProductItem;
