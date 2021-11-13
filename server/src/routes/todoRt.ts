import express from "express";
import { CreateTodo, FetchAllTodos } from "../controllers/todoCon";

export const todoRt: express.Router = express.Router();
    todoRt.post("/create", CreateTodo);
    todoRt.get("/", FetchAllTodos);




    