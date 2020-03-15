import React, {Fragment} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import SvgIcon from '@material-ui/core/SvgIcon'

const SearchForm = (props) => {
    const {onFocus, onBlur, onChange} = props
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return(
        <Fragment>
            <form>
                <div className="input-group">
                    <input className="form-control" 
                        ype="search" 
                        placeholder="Temukan barang yang kamu butuhkan disini" 
                        name="searchInput"
                        onFocus={onFocus} 
                        onBlur={onBlur} 
                        onChange={(e)=>{handleChange(e)}}
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
                    <button type="submit" className="d-none"></button>
                </div>
            </form>
        </Fragment>
    )
}

export default SearchForm