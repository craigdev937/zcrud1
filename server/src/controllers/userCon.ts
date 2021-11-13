import express from "express";
import jwt from "jsonwebtoken";
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

export const HomeIndex: express.RequestHandler =
(req, res) => {
    res.json({ HOME: "RTK Query MERN!" });
};






