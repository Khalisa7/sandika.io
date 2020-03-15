import React, { Component, Fragment, Suspense } from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import LoadingSpinner from '@src/component/loading-spinner'
import location from '@src/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import interfaces from '@src/interfaces'
import Navbar from '@src/component/navbar'
import Content from '@src/component/content'

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
                    <Navbar 
                        logo={logo} 
                        user_login={user} 
                        link={navbar_link}
                        toggleIcon = {<FontAwesomeIcon icon={faBars}/>}
                        />
                        
                    <Content>
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
                    </Content>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App