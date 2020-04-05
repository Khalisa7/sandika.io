import React, { Fragment } from "react";
import PropTypes from "prop-types";

const QuickCart = (props) => {
    const { open, close, children } = props;
    return (
        <Fragment>
            <div className={open ? "quickcart-wrapper active" : "quickcart-wrapper"}>
                <div className="quickcart-overlay" onClick={close} />
                <div className="quickcart-content">
                    <div className="quickcart-header">
                        <h5>Keranjang Belanja</h5>
                    </div>
                    <div className="quickcart-list">
                        { children }
                    </div>
                    <div className="quickcart-footer">
                        <a href="#"
                            className="btn btn-lg btn-block btn-warning text-white">Periksa Keranjang Belanja</a>
                        <a href="#"
                            className="btn btn-lg btn-block btn-success text-white">Lanjut Ke Checkout</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

QuickCart.defaultProps = {
    open: false,
    close: null,
    children: null
};

QuickCart.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default QuickCart;
