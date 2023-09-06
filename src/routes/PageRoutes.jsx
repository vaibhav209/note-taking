import { Route, Routes } from "react-router-dom";
import Naviagtion from "../components/Navigation/Navigation";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes.json";

const PageRoutes = () => {
    return (
        <>
            <Naviagtion />
            <Routes>
                <Route path={routes.HOME} element={<PrivateRoute />}>
                    <Route path={routes.HOME} element={<Home />} />
                </Route>

                <Route path={routes.LOGIN} element={<Login />} />
                <Route path={routes.SIGNUP} element={<Signup />} />
            </Routes>
        </>
    );
};

export default PageRoutes;
