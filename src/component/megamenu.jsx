import React, {Fragment, useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return { megamenuContent : state.megamenuContent }
}


const Render = (props) => {
    const { megamenuContent } = props
    const wrapperRef = useRef(null);
    const [ active, setActive ] = useState(false)
    console.log(props)
    return(
        <Fragment>
            <div className={active?"dropdown megamenu active":"dropdown megamenu"}>
                <button className="btn" type="button" onClick={()=>{ setActive(!active) }} >
                    Kategori
                </button>
                <div className={active?"dropdown-menu megamenu-wrapper show": "dropdown-menu megamenu-wrapper"} aria-labelledby="dropdownMenuButton">
                    <div className="megamenu-content">
                        <div className="megamenu-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                { megamenuContent.map((res, i) => {
                                    return(
                                        <li className="nav-item" key={i}>
                                            <a className={i==0?"nav-link active":"nav-link"} data-toggle="tab" href={"#megamenu-tabs-"+i}  role="tab" aria-controls="home" aria-selected="true">{res._title}</a>
                                        </li>
                                    )
                                }) }
                            </ul>
                            <div className="tab-content p-3">
                                { megamenuContent.map((res, i) => {
                                    return (
                                        <div className={i==0?"tab-pane fade show active":"tab-pane fade"} id={"megamenu-tabs-"+i} key={i} role="tabpanel" aria-labelledby="home-tab">
                                            {res._item.map((res, i) => {
                                                return (
                                                    <p key={i}>{res._label}</p>
                                                )
                                            })}
                                        </div>
                                    )
                                }) }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={active?"megamenu-overlay show":"megamenu-overlay"} onClick={()=>{setActive(!active)}} ></div>
            </div>
        </Fragment>
    )
}

const Megamenu = connect(mapStateToProps)(Render)

export default Megamenu