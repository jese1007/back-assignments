import mongoose, {Schema} from "mongoose";

const usersSchema = new Schema({
    name: String,
    firstName: String,
    age: Number
})

export const usersModel = mongoose.model('User', usersSchema)