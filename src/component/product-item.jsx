import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const ProductItem = (props) => {
    const { label } = props;
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
                                <p className="price">Rp 20.000,-</p>
                            </div>
                            <div className="label special-price">
                                <p className="price">Rp 20.000,-</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card-footer">
                        <a href="#" className="btn btn-warning btn-block">Lihat Detail</a>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
};

ProductItem.defaultProps = {
    icon: "",
    label: ""
};

ProductItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
};

export default ProductItem;
