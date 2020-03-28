import React, { Fragment, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';

const SearchForm = (props) => {
    var typingTimer;
    var doneTypingInterval = 2000;

    const { onClick, onClickOutside, onChange } = props;
    const [searchKey, setSearchKey] = useState('');
    const wrapperRef = useRef(null);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            return onClickOutside();
        }
    };

    const keyUp = (e) => {
        clearInterval(typingTimer);
        typingTimer = setTimeout(
            () => { onChange(searchKey); },
            doneTypingInterval
        );
    };

    const keyDown = () => {
        clearInterval(typingTimer);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Fragment>
            <form autoComplete={"off"}>
                <div className="input-group" ref={wrapperRef}>
                    <input className="form-control"
                        ype="search"
                        placeholder="Temukan barang yang kamu butuhkan disini"
                        name="searchInput"
                        onClick={onClick}
                        onKeyUp={keyUp}
                        onKeyDown={keyDown}
                        value={searchKey}
                        onChange={(e) => { setSearchKey(e.target.value); }}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                            <SearchIcon fontSize={'small'}>
                                <SvgIcon>
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </SvgIcon>
                            </SearchIcon>
                        </span>
                    </div>
                    <button type="submit" className="d-none" />
                </div>
            </form>
        </Fragment>
    );
};


SearchForm.defaultProps = {
    onClick: null,
    onClickOutside: null,
    onChange: null
};

SearchForm.propTypes = {
    onClick: PropTypes.func,
    onClickOutside: PropTypes.func,
    onChange: PropTypes.func
};

export default SearchForm;
