import Main from "../pages/Main";
import Catalog from "../pages/Catalog";
import Support from "../pages/Support";
import Messages from "../pages/Messages";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import {Navigate} from "react-router-dom";
import React from "react";
import Brush from "../pages/Brush";


export const privateRoutes = [
    {path: '', component: <Main/>, exact: true},
    {path: '/catalog', component: <Catalog/>, exact: true},
    {path: '/support', component: <Support/>, exact: true},
    {path: '/messages', component: <Messages/>, exact: true},
    {path: '/profile', component: <Profile/>, exact: true},
    {path: '/brush', component: <Brush/>, exact: true},
    {path: '/error-page', component: <Page404/>, exact: true},
    {path: '*', component: <Navigate to="/error-page" />, exact: true},
]

export const publicRoutes = [
    {path: '', component: <Main/>, exact: true},
    {path: '/catalog', component: <Catalog/>, exact: true},
    {path: '/support', component: <Support/>, exact: true},
    {path: '/brush', component: <Brush/>, exact: true},
    {path: '/error-page', component: <Page404/>, exact: true},
]