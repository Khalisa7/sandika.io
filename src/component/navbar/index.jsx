import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import QuickCart from "@src/component/quickcart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from "@material-ui/core/SvgIcon";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        logo: state.logo,
        navbarLink: state.navbarLink,
        megamenuContent: state.megamenuContent
    };
};

const Render = (props) => {
    const { navbarLink } = props;
    const [quickcartState, setQuickcartState] = useState(false);
    return (
        <Fragment>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-lg p-2">
                    <div className="container">
                        <div className="toggle-logo">
                            <button className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <MenuIcon>
                                    <SvgIcon>
                                        <path d="M20 12l-1.41-1.41L13
                                            16.17V4h-2v12.17l-5.58-5.59L4
                                            12l8 8 8-8z" />
                                    </SvgIcon>
                                </MenuIcon>
                            </button>
                        </div>
                        <div className="search-container">
                            <div className="d-flex my-2 my-lg-0">
                                <div className="search-form">
                                    <form autoComplete={"off"}>
                                        <Link to="/search">
                                            <span>
                                                <div className="input-group">
                                                    <input className="form-control"
                                                        ype="search"
                                                        placeholder="Temukan barang yang kamu butuhkan disini"
                                                        name="searchInput"
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" id="basic-addon1">
                                                            <SearchIcon fontSize={'small'}>
                                                                <SvgIcon>
                                                                    <path d="M20 12l-1.41-1.41L13
                                                                        16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                                                </SvgIcon>
                                                            </SearchIcon>
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-right float-right">
                            <ul className=" nav justify-content-end">
                                { navbarLink.map((res, i) => {
                                    if (res._type === "link") {
                                        if (res._label === "Wishlist") {
                                            return (
                                                <li className="nav-item" key={i} >
                                                    <Link to={res._routes} className={res._style}>
                                                        <FavoriteIcon>
                                                            <SvgIcon>
                                                                <path d="M20 12l-1.41-1.41L13
                                                                    16.17V4h-2v12.17l-5.58-5.59L4
                                                                    12l8 8 8-8z" />
                                                            </SvgIcon>
                                                        </FavoriteIcon>
                                                        <span>{res._label}</span>
                                                    </Link>
                                                </li>
                                            );
                                        } else if (res._type === "link") {
                                            return (
                                                <li className="nav-item" key={i} >
                                                    <Link to={res._routes} className={res._style}>
                                                        {res._label === "Wishlist" ?
                                                            <FavoriteIcon
                                                                onClick={() => {setQuickcartState(!quickcartState);}}>
                                                                <SvgIcon>
                                                                    <path d="M20 12l-1.41-1.41L13
                                                                        16.17V4h-2v12.17l-5.58-5.59L4
                                                                        12l8 8 8-8z"/>
                                                                </SvgIcon>
                                                            </FavoriteIcon> :
                                                            null }
                                                        <span>{res._label}</span>
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    }
                                }) }
                            </ul>
                        </div>
                    </div>
                </nav>
                <QuickCart open={quickcartState} close={() => {setQuickcartState(false);}}/>
            </header>
        </Fragment>
    );
};

Render.defaultProps = {
    // logo: {
    //     _src: "",
    //     _alt: "",
    //     _label: ""
    // },
    toggleIcon: null,
    navbarLink: []
};

Render.propTypes = {
    // logo: PropTypes.object.isRequired,
    toggleIcon: PropTypes.object,
    navbarLink: PropTypes.array.isRequired
};

const Navbar = connect(mapStateToProps)(Render);

export default Navbar;
