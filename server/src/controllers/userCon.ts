import express from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/keys";
import { User, IUser } from "../models/User";

export const Register: express.RequestHandler =
async (req, res, next) => {
    try {
        const user: IUser = new User({
            firstname: req.body.firstname, 
            lastname: req.body.lastname, 
            email: req.body.email, 
            password: req.body.password
        });
        await user.save()
        .then((user) => res.status(201).json(user));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const Login: express.RequestHandler =
async (req, res, next) => {
    try {
        const { email, password }: IUser = req.body;
        const user: IUser[] = 
            await User.find({ email: email });
        if (!user) return res.status(200)
            .json({ message: "Email is incorrect" });
        if (password !== user[0].password) 
            return res.status(200)
            .json({ message: "Password incorrect" });        
        const token: string = jwt.sign({
            id: user[0].id,
            firstname: user[0].firstname,
            lastname: user[0].lastname,
            email: user[0].email,
            role: user[0].role,
        }, config.JWT_SECRET);
        res.status(200).json({ token: token });
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};






