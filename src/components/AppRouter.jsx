import React from 'react';
import {Route, Routes} from "react-router-dom";

import {privateRoutes} from "../router";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={route.path}>
                    </Route>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;