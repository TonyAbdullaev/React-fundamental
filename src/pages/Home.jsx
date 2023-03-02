import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";

const Home = () => {
    return (
        <>
            <header className="navbar">
                <Navbar />
            </header>
            <main className="body">
                <Outlet />
            </main>
        </>
    );
};

export default Home;