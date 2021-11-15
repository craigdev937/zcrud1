import React from "react";

interface IError {
    status: string,
};

export const ErrorMsg = ({status}: IError): JSX.Element => {
    return (
        <React.Fragment>
            <h3>{status}</h3>
        </React.Fragment>
    );
};



