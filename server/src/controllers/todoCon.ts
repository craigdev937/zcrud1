import express from "express";
import crypto from "crypto";
import { Todo, ITodo } from "../models/Todo";

export const CreateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        console.log(req.body.id);
        const todo: ITodo = new Todo({
            userId: req.body.id,
            id: crypto.randomBytes(12).toString("hex"),
            title: req.body.title,
            completed: req.body.completed
        });
        await todo.save()
        .then((todo) => res.status(201).json(todo));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const FetchAllTodos: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.find()
        .then((todos) => res.status(200).json(todos));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};






