import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes.json";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsUserLogin(true);
    };
    const logoutHandler = () => {
        setIsUserLogin(false);
        navigate(routes.LOGIN);
    };

    return (
        <AuthContext.Provider value={{ isUserLogin, loginHandler, logoutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
