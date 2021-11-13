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

export const GetOneTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.findById(req.params.id)
        .then((todo) => res.status(200).json(todo));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const UpdateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        await Todo.findByIdAndUpdate(id, {
            title, completed
        })
        .then(() => res.status(200).json("Todo Updated!"));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const DeleteTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("The Todo was Deleted!"));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};




