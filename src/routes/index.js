import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));
const Catalog = lazy(() => import("@src/pages/catalog"));
const Dashboard = lazy(() => import("@src/pages/dashboard"));

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
        path: "/:slug",
        component: () => {return (<Catalog/>);}
    }
];


export default routes;
