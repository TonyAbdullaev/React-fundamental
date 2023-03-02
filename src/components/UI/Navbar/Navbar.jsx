import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import "./Navbar.css";
import MyButton from "../MyButton/MyButton";
import {AuthContext} from "../../../hoc/AuthProvider";
import {HomePagePath} from "../../../contants/constants";

const Navbar = () => {
    const navigate = useNavigate();
    const {signOut} = useContext(AuthContext);

    const signOutHandler = () => {
        signOut(()=> navigate(HomePagePath, {replace: true}))
    }
    return (
        <div className="navbar__wrapper">
            <div className="navbar__buttons">
                <MyButton onClick={signOutHandler}>Sign out</MyButton>
            </div>
            <div className="navbar__links">
                <ul className="navbar__list">
                    <NavLink to="/about" className="navbar__text">About</NavLink>
                </ul>
                <ul className="navbar__list">
                    <NavLink to="/posts" className="navbar__text">Posts</NavLink>
                </ul>
                <ul className="navbar__list">
                    <NavLink to="/counters" className="navbar__text">Counters and Input</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;