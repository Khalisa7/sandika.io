import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Megamenu from '@src/component/megamenu';
import SearchForm from '@src/component/search-form';
import SearchResult from '@src/component/search-result';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SvgIcon from '@material-ui/core/SvgIcon';

const Navbar = (props) => {
    const { toggleIcon, logo, link } = props;
    const [searchFormState, setSearchFormState] = useState(false);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        console.log(searchFormState);
        return searchFormState ? document.body.classList.add('search-open') : document.body.classList.remove('search-open');
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
    toggleIcon: PropTypes.object,
    user_login: PropTypes.bool.isRequired,
    link: PropTypes.array.isRequired
};


export default Navbar;
