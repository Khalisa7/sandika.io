import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingSpinner from "@src/component/loading-spinner";
import location from "@src/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import interfaces from "@src/interfaces";
import Navbar from "@src/component/navbar";
import Content from "@src/component/content";
import Brands from "@src/component/brands";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const { logo, user, navbarLink } = interfaces;

        return (
            <Fragment>
                <BrowserRouter>
                    <Suspense fallback={<LoadingSpinner/>} >
                        <Navbar
                            logo={logo}
                            user_login={user}
                            link={navbarLink}
                            toggleIcon = {<FontAwesomeIcon icon={faBars}/>}
                        />

                        <Content>
                            <Switch>
                                {
                                    location.map((route, i) => {
                                        return (
                                            <Route exact={route.exact} path={route.path} key={i} component={route.render}/>
                                        );
                                    })
                                }
                            </Switch>

                        </Content>
                    </Suspense>
                </BrowserRouter>
                <Brands/>
            </Fragment>
        );
    }
}

export default App;
