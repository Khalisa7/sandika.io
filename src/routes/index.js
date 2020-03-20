import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));

const routes = [
    {
        path: "/",
        component: () => {return (<Homepage/>);},
        routes: [
            {
                path: "/product",
                component: () => {return (<Homepage/>);}
            },
            {
                path: "/detail",
                component: () => {return (<Homepage/>);}
            }
        ]
    },
    {
        path: "/dashboard",
        component: () => {return (<Homepage/>);}
    }
];


export default routes;
