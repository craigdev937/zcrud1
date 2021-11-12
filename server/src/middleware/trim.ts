import express from "express";

export const trim: express.RequestHandler =
(req, res, next) => {
    const exceptions = ["password"];

    Object.keys(req.body).forEach((key) => {
        if (!exceptions.includes(key) &&
        typeof req.body[key] === "string") {
            req.body[key] = req.body[key].trim();
        }
    });
    next();
};





