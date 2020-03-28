import React, { Fragment, Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import LoadingSpinner from "@src/component/loading-spinner";
import PropTypes from 'prop-types';
import routes from "@src/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import interfaces from "@src/interfaces";
import Navbar from "@src/component/navbar";
import Content from "@src/component/content";
// import Brands from "@src/component/brands";
import Footer from "@src/component/footer";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { megamenuContent: state.megamenuContent };
};

const Render = (props) => {
    const { logo, user, navbarLink } = interfaces;
    const { megamenuContent } = props;
    const { pathname } = useLocation();
    return (
        <Fragment>
            <Suspense fallback={<LoadingSpinner/>} fallbackMinDurationMs={1500} >
                <Navbar
                    logo={logo}
                    user_login={user}
                    link={navbarLink}
                    toggleIcon = {<FontAwesomeIcon icon={faBars}/>}
                    megamenu = {megamenuContent}
                />

                <Content>
                    <Switch>
                        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                        {
                            routes.map((route, i) => {
                                if (route.path === "/" || route.path === "/dashboard") {
                                    return (<Route key={i} exact path={route.path} children={route.component}/>);
                                } else {
                                    return (<Route key={i} path={route.path} children={route.component}/>);
                                }
                            })
                        }
                    </Switch>

                </Content>
                {/* <Brands/> */}
                <Footer/>
            </Suspense>
        </Fragment>
    );
};

Render.propTypes = {
    megamenuContent: PropTypes.array
};

const App = connect(mapStateToProps)(Render);

export default App;
