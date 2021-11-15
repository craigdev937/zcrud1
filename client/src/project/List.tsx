import React from "react";
import { Link } from "react-router-dom";
import { TodoAPI } from "../global/TodoAPI";
import { Info } from "./Info";

export const List = (): JSX.Element => {
    const { data } = TodoAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            {data && data.map((todo) => (
                <Info 
                    key={todo._id}
                    todo={todo}
                />
            ))}
        </React.Fragment>
    );
};



