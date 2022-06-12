import React, {useContext} from 'react';
import {Redirect, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Registration from "../pages/Registration";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import NotFound from "../pages/NotFound";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;