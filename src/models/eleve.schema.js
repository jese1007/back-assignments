import mongoose, {Schema} from "mongoose";

const eleveSchema = new Schema({
    name: String,
    firstName: String,
    age: Number,
    photo: String,
})

export const usersModel = mongoose.model('Eleve', eleveSchema)