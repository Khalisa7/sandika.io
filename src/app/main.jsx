import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingSpinner from "@src/component/loading-spinner";
import PropTypes from 'prop-types';
import routes from "@src/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import interfaces from "@src/interfaces";
import Navbar from "@src/component/navbar";
import Content from "@src/component/content";
import Brands from "@src/component/brands";
import Footer from "@src/component/footer";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { megamenuContent: state.megamenuContent };
};

class Render extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const { logo, user, navbarLink } = interfaces;
        const { megamenuContent } = this.props;
        return (
            <Fragment>
                <BrowserRouter>
                    <Suspense fallback={<LoadingSpinner/>} >
                        <Navbar
                            logo={logo}
                            user_login={user}
                            link={navbarLink}
                            toggleIcon = {<FontAwesomeIcon icon={faBars}/>}
                            megamenu = {megamenuContent}
                        />

                        <Content>
                            <Switch>
                                {
                                    routes.map((route, i) => {
                                        return (
                                            <Route
                                                key={i}
                                                path={route.path}
                                                render={props => (
                                                    <route.component {...props} routes={route.routes} />
                                                )}
                                            />
                                        );
                                    })
                                }
                            </Switch>

                        </Content>
                    </Suspense>
                </BrowserRouter>
                <Brands/>
                <Footer/>
            </Fragment>
        );
    }
}

Render.propTypes = {
    megamenuContent: PropTypes.array
};

const App = connect(mapStateToProps)(Render);

export default App;
