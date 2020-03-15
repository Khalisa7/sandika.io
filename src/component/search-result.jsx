import React, {Fragment} from 'react'

const SearchResult = (props) => {
    const searchRow = []
    const {products} = props
    console.log(props)

    products.sort((a, b) => {
        let comparison = 0;
        if(a.category.toLowerCase() > b.category.toLowerCase()){
            comparison = 1
        }
        if(a.category.toLowerCase() < b.category.toLowerCase()){
            comparison = -1
        }
        return comparison
    })

    return(
        <Fragment>
            <div className="search-result">
                <div className="product-search">
                    <label className="section-title">Product Search</label>
                    <div className="section-content">
                        {products.map((res, i)=>{
                            return(
                                <div className="media" key={i}>
                                    <div className="img-thumbs">
                                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_170d7e40b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_170d7e40b11%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.65%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" srcSet=""/>
                                    </div>
                                    <div className="media-body align-self-center">
                                        <p>Iphone</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="category-search">
                    <label className="section-title">Category Search</label>
                </div>
            </div>
        </Fragment>
    )
}

export default SearchResult