import express from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/keys";

export const verifyPass: express.RequestHandler =
async (req: any, res, next) => {
    try {
        const authHeader: string | undefined = 
            req.headers["authorization"];
        const token: string = String(authHeader) &&
            String(authHeader).split(" ")[1];
        if (token === null) return res.status(401);
        jwt.verify(token, config.JWT_SECRET, 
            (err, user) => {
                if (err) return res.send(403);
                req.user = user;
            });
        next();
    } catch (error) {
        console.log(error);
    }
};





