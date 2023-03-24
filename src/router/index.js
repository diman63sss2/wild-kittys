import Main from "../pages/Main";
import Catalog from "../pages/Catalog";
import Support from "../pages/Support";
import Page404 from "../pages/Page404";
import Profile from "../pages/Profile";
import {Navigate} from "react-router-dom";
import React from "react";
import Brush from "../pages/Brush";
import {
    BRUSH_ROUTE,
    CATALOG_ROUTE,
    ERROR_ROUTE,
    MAIN_ROUTE,
    OTHER_ROUTE,
    PROFILE_ROUTE,
    SUPPORT_ROUTE
} from "../utils/const";


export const privateRoutes = [
    {path: MAIN_ROUTE, component: <Main/>, exact: true},
    {path: CATALOG_ROUTE, component: <Catalog/>, exact: true},
    {path: SUPPORT_ROUTE, component: <Support/>, exact: true},
    {path: PROFILE_ROUTE, component: <Profile/>, exact: true},
    {path: BRUSH_ROUTE, component: <Brush/>, exact: true},
    {path: ERROR_ROUTE, component: <Page404/>, exact: true},
    {path: OTHER_ROUTE, component: <Navigate to="/error-page" />, exact: true},
]

export const publicRoutes = [
    {path: MAIN_ROUTE, component: <Main/>, exact: true},
    {path: CATALOG_ROUTE, component: <Catalog/>, exact: true},
    {path: SUPPORT_ROUTE, component: <Support/>, exact: true},
    {path: ERROR_ROUTE, component: <Page404/>, exact: true},
    {path: OTHER_ROUTE, component: <Navigate to="/error-page" />, exact: true},
]