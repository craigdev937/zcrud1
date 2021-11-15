import React from "react";
import { Navbar } from "../pages/Navbar";
import { List } from "../project/List";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <Navbar />
            <List />
        </React.Fragment>
    );
};



