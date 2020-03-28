import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: () => { return true; }, name: 'Football', img: 'https://via.placeholder.com/60' },
    { category: 'Sporting Goods', price: '$9.99', stocked: () => { return true; }, name: 'Baseball', img: 'https://via.placeholder.com/60' },
    { category: 'Sporting Goods', price: '$29.99', stocked: () => { return true; }, name: 'Basketball', img: 'https://via.placeholder.com/60' },
    { category: 'Electronics', price: '$99.99', stocked: () => { return true; }, name: 'iPod Touch', img: 'https://via.placeholder.com/60' },
    { category: 'Electronics', price: '$399.99', stocked: () => { return true; }, name: 'iPhone 5', img: 'https://via.placeholder.com/60' },
    { category: 'Electronics', price: '$199.99', stocked: () => { return true; }, name: 'Nexus 7', img: 'https://via.placeholder.com/60' },
    { category: 'Sporting Goods', price: '$29.99', stocked: () => { return true; }, name: 'Basketball', img: 'https://via.placeholder.com/60' }
];

const SearchResult = (props) => {
    const searchRow = [];
    const { searchKey } = props;
    const products = PRODUCTS;
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };

    const previousSearchKey = usePrevious(searchKey);
    const tempRow = [];

    // Sorting Product
    products.sort((a, b) => {
        let comparison = 0;
        if (a.category.toLowerCase() > b.category.toLowerCase()) {
            comparison = 1;
        }
        if (a.category.toLowerCase() < b.category.toLowerCase()) {
            comparison = -1;
        }
        return comparison;
    });

    // Push To ROW
    if (searchKey.length !== 0 && searchKey !== previousSearchKey) {
        products.map((res, i) => {
            if (res.name.indexOf(searchKey) === -1) {
                return -1;
            }
            searchRow.push(
                <div className="media" key={i}>
                    <div className="img-thumbs">
                        <img src={res.img} srcSet=""/>
                    </div>
                    <div className="media-body">
                        <p>{res.name}</p>
                    </div>
                </div>
            );
            tempRow.push(
                <div className="media" key={i}>
                    <div className="img-thumbs">
                        <img src={res.img} srcSet=""/>
                    </div>
                    <div className="media-body">
                        <p>{res.name}</p>
                    </div>
                </div>
            );
        });
    } else if (searchKey === "") {
        products.map((res, i) => {
            searchRow.push(
                <div className="media" key={i}>
                    <div className="img-thumbs">
                        <img src={res.img} srcSet=""/>
                    </div>
                    <div className="media-body">
                        <p>{res.name}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <Fragment>
            <div className="search-result">
                <div className="product-search">
                    <label className="section-title">Product Search</label>
                    <div className="section-content">
                        {searchRow}
                    </div>
                </div>
                <div className="category-search">
                    <label className="section-title">Category Search</label>
                </div>
            </div>
        </Fragment>
    );
};

SearchResult.defaultProps = {
    products: [],
    searchKey: ''
};

SearchResult.propTypes = {
    products: PropTypes.array,
    searchKey: PropTypes.string
};

export default SearchResult;
