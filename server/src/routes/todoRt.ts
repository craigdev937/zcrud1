import express from "express";
import { CreateTodo, FetchAllTodos, GetOneTodo, 
    UpdateTodo, DeleteTodo } from "../controllers/todoCon";

export const todoRt: express.Router = express.Router();
    todoRt.post("/create", CreateTodo);
    todoRt.get("/", FetchAllTodos);
    todoRt.get("/:id", GetOneTodo);
    todoRt.put("/:id", UpdateTodo);
    todoRt.delete("/:id", DeleteTodo);




    