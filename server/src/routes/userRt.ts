import express from "express";
import { HomeIndex } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.get("/", HomeIndex);




