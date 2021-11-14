import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../global/RootReducer";
import { AuthAPI } from "../global/AuthAPI";
import { saveToken } from "../global/AuthSlice";

const RegistrationWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
`;

const InputText = styled.input`
    padding: 5px;
    margin-top: 5px;
    outline: none;
    border-radius: 4px;
    input:nth-child(4) {
        margin-bottom: 5px;
    }
    input:nth-child(5) {
        align-self: center;
        width: 50%;
        border: none;
        background-color: transparent;
        box-shadow: 1px 1px 5px silver;
        cursor: pointer;
    }
`;

interface IFormData {
    email: string,
    password: string
};

export const Login = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [login, {data}] = AuthAPI.useLoginMutation();
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData: IFormData) => {
        login(formData)
    };

    React.useEffect(() => {
        if (!data) return;
        dispatch(saveToken(data.token!));
        navigate("/");
    }, [data, dispatch, navigate]);

    return (
        <RegistrationWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">E-Mail</label>
                <InputText 
                    type="text" 
                    {...register("email", 
                    { required: true })} 
                />
                <label htmlFor="password">Password</label>
                <InputText 
                    type="text" 
                    {...register("password", 
                    { required: true })} 
                />
                <InputText type="submit" value="Login In" />
            </Form>    
        </RegistrationWrapper>            
    );
};



