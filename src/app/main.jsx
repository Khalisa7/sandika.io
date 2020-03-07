import React, { Component, Fragment, Suspense } from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import LoadingSpinner from '@src/component/loading-spinner'
import location from '@src/routes'
import interfaces from '@src/interfaces';
import Navbar from '@src/component/navbar';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {logo, user, navbar_link} =  interfaces

        return (
            <Fragment>
                <BrowserRouter>
                    <Navbar logo={logo} user_login={user} link={navbar_link}/>
                    <Suspense fallback={ <LoadingSpinner/> } > 
                        <Switch>
                            {
                                location.map( (route, i)=>{
                                    return(
                                        <Route exact={route.exact} path={route.path} key={i} component={route.render}/>
                                    )
                                })
                            }
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App