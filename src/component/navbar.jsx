import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { logo, link } = props
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="togle-logo">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            
                        </button>
                        <a className="navbar-brand" href="#">{logo._label}</a>
                    </div>
                    <div className="d-none d-md-flex ml-auto">
                        <ul className=" nav justify-content-end">
                            { link.map((res, i)=>{
                                if(res._type==='link'){
                                    return(
                                        <li className="nav-item" key={i} >
                                            <Link to={res._routes} className="nav-link">{res._label}</Link>
                                        </li>
                                    )
                                }
                                else{
                                    return(
                                        <li className="nav-item dropdown" key={i}>
                                            <a className="nav-link dropdown-toggle" href="#" id={"navbar-dropdown-" + i} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {res._label}
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby={"navbar-dropdown-" + i}>
                                                { res._item.map((res, i)=>{
                                                    return(
                                                        <Link to={res._routes} className="dropdown-item" key={i}>{res._label}</Link>
                                                    )
                                                }) }
                                            </div>
                                        </li>
                                    )
                                }
                            }) }
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

Navbar.defaultProps = {
    logo : {
        _src : '',
        _alt : '',
        _label: ''
    },
    user_login : false,
    link : []
}

Navbar.propTypes = {
    logo : PropTypes.object.isRequired,
    user_login : PropTypes.bool.isRequired,
    link : PropTypes.array.isRequired
}


export default Navbar