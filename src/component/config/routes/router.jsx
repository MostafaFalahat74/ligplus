import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import RoutesPage from "../routes/route/router";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RoutesPage?.map((itm, index) => (
                    <Route
                        key={index}
                        exact={itm.exact}
                        path={itm.path}
                        element={itm.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;