import express from "express";
import { createHmac } from "crypto";

export const encryptPass: express.RequestHandler = 
(req, res, next) => {
    try {
        req.body.password = 
        createHmac("sha256", req.body.password)
            .update("pass")
            .digest("hex");
        next();
    } catch (error) {
        console.log(error);
    }
};



