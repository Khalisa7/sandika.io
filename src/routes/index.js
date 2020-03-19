import React, { lazy } from "react";
const Homepage = lazy(() => import("@src/pages/homepage"));

const location = [
    {
        path: "/",
        exact: true,
        render: () => {return (<Homepage/>);}
    },
    {
        path: "/dashboard",
        exact: true,
        render: () => {return (<Homepage/>);}
    }
];


export default location;
