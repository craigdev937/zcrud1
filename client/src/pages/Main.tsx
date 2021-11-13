import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Private } from "../containers/Private";
import { Register } from "../containers/Register";
import { Login } from "../containers/Login";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<Private />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);




