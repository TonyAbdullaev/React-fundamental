import React from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        const password = form.password.value;

        signIn(user, () => navigate(fromPage, {replace: true}))

    };
    return (
        <div>
            <h2>Welcome, please login!</h2>
            <form onSubmit={handleSubmit}>
                <MyInput type="text" name="username" placeholder="Write your name..." />
                <MyInput type="password" name="password" placeholder="Write password..." />
                <MyButton type="submit">Login</MyButton>
            </form>
        </div>
    );
};

export default Login;