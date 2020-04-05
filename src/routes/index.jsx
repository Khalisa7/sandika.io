import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));
const Catalog = lazy(() => import("@src/pages/catalog"));
const DetailProduct = lazy(() => import("@src/pages/detail"));
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
        path: "/catalog/:slug",
        component: () => {return (<Catalog/>);}
    },
    {
        path: "/:slug",
        component: () => {return (<DetailProduct/>);}
    }
];


export default routes;
