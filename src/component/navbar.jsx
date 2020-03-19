import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Megamenu from '@src/component/megamenu';
import SearchForm from '@src/component/search-form';
import SearchResult from '@src/component/search-result';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SvgIcon from '@material-ui/core/SvgIcon';


const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: () => { return true; }, name: 'Football', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Sporting Goods', price: '$9.99', stocked: () => { return true; }, name: 'Baseball', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Sporting Goods', price: '$29.99', stocked: () => { return true; }, name: 'Basketball', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Electronics', price: '$99.99', stocked: () => { return true; }, name: 'iPod Touch', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Electronics', price: '$399.99', stocked: () => { return true; }, name: 'iPhone 5', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Electronics', price: '$199.99', stocked: () => { return true; }, name: 'Nexus 7', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' },
    { category: 'Sporting Goods', price: '$29.99', stocked: () => { return true; }, name: 'Basketball', img: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' }
];

const Navbar = (props) => {
    const { toggleIcon, logo, link } = props;
    const [searchFormState, setSearchFormState] = useState(false);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        return searchFormState ? () => { document.body.classList.add('search-open'); } : () => { document.body.classList.remove('search-open'); };
    });

    const handleSearchFormFocus = () => {
        setSearchFormState(!searchFormState);
    };

    const handleSearchKey = ($value) => {
        setSearchKey($value);
    };

    return (
        <Fragment>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-lg p-2">
                    <div className="container">
                        <div className="toggle-logo">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {toggleIcon}
                            </button>
                            <a className="navbar-brand d-none d-md-inline-block" href="#">{logo._label}</a>
                        </div>
                        <div className={searchFormState ? "search-container active" : "search-container"}>
                            <div className="d-flex my-2 my-lg-0">
                                <div className="search-category mr-2 d-none d-md-inline-block">
                                    <Megamenu/>
                                </div>
                                <div className="search-form">
                                    <SearchForm
                                        onFocus={handleSearchFormFocus}
                                        onBlur={handleSearchFormFocus}
                                        onChange={handleSearchKey}
                                    />
                                    <SearchResult
                                        products={PRODUCTS}
                                        searchKey={searchKey}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="navbar-right float-right">
                            <ul className=" nav justify-content-end">
                                { link.map((res, i) => {
                                    if (res._type === 'link') {
                                        return (
                                            <li className="nav-item" key={i} >
                                                <Link to={res._routes} className={res._style}>
                                                    {res._label === 'Cart' ?
                                                        <ShoppingCartIcon>
                                                            <SvgIcon>
                                                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                                            </SvgIcon>
                                                        </ShoppingCartIcon> :
                                                        null }
                                                    <span>{res._label}</span>
                                                </Link>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li className="nav-item dropdown" key={i}>
                                                <a className="nav-link dropdown-toggle" href="#" id={"navbar-dropdown-" + i} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {res._label}
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"navbar-dropdown-" + i}>
                                                    { res._item.map((res, i) => {
                                                        return (
                                                            <Link to={res._routes} className="dropdown-item" key={i}>{res._label}</Link>
                                                        );
                                                    }) }
                                                </div>
                                            </li>
                                        );
                                    }
                                }) }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

Navbar.defaultProps = {
    logo: {
        _src: '',
        _alt: '',
        _label: ''
    },
    toggleIcon: null,
    user_login: false,
    link: []
};

Navbar.propTypes = {
    logo: PropTypes.object.isRequired,
    toggleIcon: PropTypes.func,
    user_login: PropTypes.bool.isRequired,
    link: PropTypes.array.isRequired
};


export default Navbar;
