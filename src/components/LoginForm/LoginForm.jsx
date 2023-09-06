import { useContext, useState } from "react";
import routes from "../../routes/routes.json";
import { toast } from "react-toastify";
import UserForm from "../UserForm/UserForm";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { loginHandler } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful. Enjoy!");
            loginHandler();

            navigate(routes.HOME, { state: { email } });
        } catch (error) {
            const isError = error.code;
            if (isError === "auth/user-not-found") {
                toast.error("No account exists for this email address");
            } else {
                toast.error("Invalid Password");
            }
        }
    };

    return (
        <UserForm
            title="Login to Note Taking"
            emailValue={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            passwordValue={password}
            onPasswordChange={(e) => setPassword(e.target.value)}
            btnName="Log In"
            btnVariant="outline-success"
            onActionButtonClick={handleLogin}
            userLinkText="Dont have an account?"
            to={routes.SIGNUP}
            userLink="SignUp"
        />
    );
};

export default LoginForm;
