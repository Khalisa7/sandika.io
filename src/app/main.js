import React, { Component, Fragment, Suspense } from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import LoadingSpinner from '@src/component/loadingspinner'
import location from '@src/routes'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <BrowserRouter>
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