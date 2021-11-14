import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IUser } from "../models/IUser";
import { AuthAPI } from "../global/AuthAPI";

const RegistrationWrapper = styled.main`
    display: flex;
    justify-content: center;
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

export const Register = (): JSX.Element => {
    const { register, handleSubmit } = useForm();
    const [ registration ] = AuthAPI.useRegMutation();
    const onSubmit = (data: IUser) => {
        registration(data);
    };

    return (
        <RegistrationWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">Firstname</label>
                <InputText type="text" {...register("firstname", { required: true })} />
                <label htmlFor="lastname">Lastname</label>
                <InputText type="text" {...register("lastname", { required: true })} />
                <label htmlFor="email">E-mail</label>
                <InputText type="text" {...register("email", { required: true })} />
                <label htmlFor="password">Password</label>
                <InputText type="text" {...register("password", { required: true })} />
                <InputText type="submit" defaultValue="Sign Up" />
            </Form>
        </RegistrationWrapper>
    );
};



