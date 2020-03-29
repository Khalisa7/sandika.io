import React, { Fragment, Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import LoadingSpinner from "@src/component/loading-spinner";
import routes from "@src/routes";
import Navbar from "@src/component/navbar";
import Content from "@src/component/content";
import Footer from "@src/component/footer";

const App = (props) => {
    const { pathname } = useLocation();
    return (
        <Fragment>
            <Suspense fallback={<LoadingSpinner/>} fallbackMinDurationMs={1500} >
                <Navbar/>

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

export default App;
