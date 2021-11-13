import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
    userId: string,
    id: string,
    title: string,
    completed: boolean
};

const TodoSchema: mongoose.Schema = new mongoose.Schema({
    userId: { type: String, require: true },
    id: { type: String, unique: true, require: true },
    title: { type: String, require: true },
    completed: { type: Boolean, require: true },
});

export const Todo = mongoose.model<ITodo>("Todo", TodoSchema);



