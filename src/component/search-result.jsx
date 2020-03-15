import React, {Fragment, useEffect, useRef} from 'react'


const SearchResult = (props) => {
    const searchRow = []
    const {products, searchKey} = props
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const previousSearchKey = usePrevious(searchKey)
    
    // Sorting Product
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

    // Push To ROW
    if(searchKey.length !== 0 && searchKey!==previousSearchKey){
        var lastCategory = null
        console.log(searchKey)
        products.map((res, i)=>{
            if(res.name.indexOf(searchKey) === -1){
                return -1
            }
            searchRow.push(
                <div className="media" key={i}>
                    <div className="img-thumbs">
                        <img src={res.img} srcSet=""/>
                    </div>
                    <div className="media-body align-self-center">
                        <p>{res.name}</p>
                    </div>
                </div>
            );
            lastCategory = res.category
        })
    }

    return(
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
    )
}

export default SearchResult