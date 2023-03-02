import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider, Routes
} from "react-router-dom";

import {
    AboutPagePath,
    CountersPagePath,
    ErrorPagePath,
    HomePagePath, LoginPagePath, OtherPagePath,
    PostIdPagePath,
    PostsPagePath
} from "../contants/constants";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Counters from "../pages/Counters";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import RequireAuth from "../hoc/RequireAuth";

const AppRouter = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path={HomePagePath} element={<Home />}>
            <Route path={LoginPagePath} element={<Login />} />
            <Route path={PostsPagePath} element={
                <RequireAuth>
                    <Posts />
                </RequireAuth>
            } />
            <Route path={PostIdPagePath} element={<PostIdPage />}/>
            <Route path={CountersPagePath} element={<Counters />}/>
            <Route path={AboutPagePath} element={<About />}/>
            <Route path={ErrorPagePath} element={<Error />}/>
            <Route path={OtherPagePath} element={<Navigate to='error' replace /> }/>
        </Route>
    ));

    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;