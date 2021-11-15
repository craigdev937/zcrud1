import React from "react";
import { Link } from "react-router-dom";
import { ITodo } from "../models/ITodo";

type Props = {
    todo: ITodo
};

export const Info = ({todo}: Props): JSX.Element => {
    return (
        <React.Fragment>
            {/* <Link to={}>{todo.title}</Link> */}
            <main key={todo._id}>
                <h3>{todo.title}</h3>
                <p>{todo.completed}</p>
            </main>
        </React.Fragment>
    );
};



