import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToken, removeUser } from "../global/AuthSlice";
import { RootState, AppDispatch } from "../global/RootReducer";

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

const Li = styled.li`
    display: inline-block;
    padding: 5px 10px;
`;

const MyLink = styled(Link)`
    text-decoration: none;
    font-size: 23px;
`;

export const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const token = useSelector(
        (state: RootState) => state.auth.token);
    const clean = (): void => {
        localStorage.removeItem("token");
        dispatch(removeToken(""));
        dispatch(removeUser([]));
    };

    return (
        <React.Fragment>
            {token ?
                <Ul>
                    <Li>
                        <MyLink to="/" onClick={() => clean()}>
                            Log Out
                        </MyLink>
                    </Li>
                    // For the Dashboard Component
                </Ul>
                :
                <Ul>
                    <Li>
                        <MyLink to="/register">
                            Register
                        </MyLink>
                    </Li>
                    <Li>
                        <MyLink to="/login">
                            Login
                        </MyLink>
                    </Li>
                </Ul>
            }
        </React.Fragment>
    );
};


