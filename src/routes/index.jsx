import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));
const Catalog = lazy(() => import("@src/pages/catalog"));
const DetailProduct = lazy(() => import("@src/pages/detail"));
const Dashboard = lazy(() => import("@src/pages/dashboard"));
const Filter = lazy(() => import("@src/pages/filter"));
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
        path: "/search",
        component: () => {return (<Search/>);}
    },
    {
        path: "/filter",
        component: () => {return (<Filter/>);}
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
