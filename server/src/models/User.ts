import mongose from "mongoose";

export interface IUser extends mongose.Document {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role: string
};

const UserSchema: mongose.Schema = new mongose.Schema({
    firstname: { type: String, unique: true, require: true },
    lastname: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    role: { type: String, ref: "Role" },
});

export const User = mongose.model<IUser>("User", UserSchema);



