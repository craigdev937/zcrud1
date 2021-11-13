import express from "express";
import { verifyPass } from "../middleware/VerifyPass";
import { encryptPass } from "../middleware/EncryptPass";
import { Login, Register, 
    UserAccess } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.post("/register", encryptPass, Register);
    userRt.post("/login", encryptPass, Login);
    userRt.post("/private", verifyPass, UserAccess);




    