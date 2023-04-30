import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen/LoginScreen'
import SignUp from "../pages/SignUpScreen/SignUp";
import FeedScreen from "../pages/FeedScreen/FeedScreen";
import PostScreen from "../pages/PostScreen/PostScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <LoginScreen/> } />
                <Route path="/signup" element={ <SignUp/> }/>
                <Route path="/feed" element={ <FeedScreen/> } />
                <Route path="/post/:id" element={ <PostScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router