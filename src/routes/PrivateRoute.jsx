import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import routes from "./routes.json";

const PrivateRoute = () => {
    const { isUserLogin } = useContext(AuthContext);

    return isUserLogin ? <Outlet /> : <Navigate to={routes.LOGIN} />;
};

export default PrivateRoute;
