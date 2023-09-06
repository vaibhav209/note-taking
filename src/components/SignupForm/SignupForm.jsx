import { useState } from "react";
import routes from "../../routes/routes.json";
import UserForm from "../UserForm/UserForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Congratulations! Your account created successfully");
            navigate(routes.LOGIN);
        } catch (error) {
            const isError = error.code;
            if (isError === "auth/email-already-in-use") {
                toast.error("Email already Exists");
            } else if (isError === "auth/invalid-email") {
                toast.error("Please enter a Valid Email Address");
            } else {
                toast.error("Please enter a Strong Password");
            }
        }
    };

    return (
        <UserForm
            title="Create a New Account"
            emailValue={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            passwordValue={password}
            onPasswordChange={(e) => setPassword(e.target.value)}
            btnName="Sign Up"
            btnVariant="outline-primary"
            onActionButtonClick={handleSignup}
            userLinkText="Already have an account?"
            to={routes.LOGIN}
            userLink="LogIn"
        />
    );
};

export default SignupForm;
