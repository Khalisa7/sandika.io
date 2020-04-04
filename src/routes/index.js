import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));
const Catalog = lazy(() => import("@src/pages/catalog"));
const Dashboard = lazy(() => import("@src/pages/dashboard"));
const Search = lazy(() => import("@src/pages/search"));

const routes = [
    {
        path: "/",
        component: () => {return (<Homepage/>);}
    },
    {
        path: "/dashboard",
        component: () => {return (<Dashboard/>);}
    },
    {
        path: "/filter",
        component: () => {return (<Search/>);}
    },
    {
        path: "/:slug",
        component: () => {return (<Catalog/>);}
    }
];


export default routes;
