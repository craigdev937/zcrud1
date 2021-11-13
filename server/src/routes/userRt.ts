import express from "express";
import { verifyPass } from "../middleware/VerifyPass";
import { encryptPass } from "../middleware/EncryptPass";
import { Register } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.post("/register", encryptPass, Register);




