import Main from "../pages/Main";
import Catalog from "../pages/Catalog";
import Support from "../pages/Support";
import Messages from "../pages/Messages";
import Page404 from "../pages/Page404";
import {Navigate} from "react-router-dom";
import React from "react";

export const privateRoutes = [
    {path: '', component: <Main/>, exact: true},
    {path: '/Catalog', component: <Catalog/>, exact: true},
    {path: '/support', component: <Support/>, exact: true},
    {path: '/messages', component: <Messages/>, exact: true},
    {path: '/error-page', component: <Page404/>, exact: true},
    {path: '*', component: <Navigate to="/error-page" />, exact: true},
]

export const publicRoutes = [
    {path: '', component: <Main/>, exact: true},
    {path: '/Catalog', component: <Catalog/>, exact: true},
    {path: '/support', component: <Support/>, exact: true},
    {path: '/error-page', component: <Page404/>, exact: true},
]