import React, { Fragment, Suspense, lazy } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import LoadingSpinner from "@src/component/loading-spinner";
import Navbar from "@src/component/navbar";
import Content from "@src/component/content";
import Brands from "@src/component/brands";
import Footer from "@src/component/footer";

// Pages
const Homepage = lazy(() => { return import ("@src/pages/homepage"); });
const Catalog = lazy(() => { return import ("@src/pages/catalog"); });

const App = (props) => {
    const { pathname } = useLocation();
    return (
        <Fragment>
            <Navbar/>
            <Content>
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path={"/"}>
                        <Suspense fallback={<LoadingSpinner/>}>
                            <Homepage/>
                        </Suspense>
                    </Route>
                    <Route path={"/catalog/:slug"}>
                        <Suspense fallback={<LoadingSpinner/>}>
                            <Catalog/>
                        </Suspense>
                    </Route>
                    <Route path={"/:product_slug"}>
                        <Suspense fallback={<LoadingSpinner/>}>
                            <Catalog/>
                        </Suspense>
                    </Route>
                </Switch>

            </Content>
            <Brands/>
            <Footer/>
        </Fragment>
    );
};

export default App;
