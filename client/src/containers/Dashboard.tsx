import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../global/RootReducer";
import { saveUser } from "../global/AuthSlice";
import { AuthAPI } from "../global/AuthAPI";

const Wrapper = styled.main`
    display: flex;
`;

const DashboardWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
`;

export const Dashboard = (): JSX.Element => {
    const [privat, { data }] = AuthAPI.usePrivateMutation();
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        if (!localStorage.getItem("token")) return
        privat(localStorage.getItem("token"));
    }, [privat]);

    React.useEffect(() => {
        if (!data) return;
        dispatch(saveUser(data));
    }, [data, dispatch]);

    return (
        <React.Fragment>
            <Wrapper>
                <h1>Dashboard</h1>
                {/* A link to the Header Component. */}
            </Wrapper>
        </React.Fragment>
    );
};



