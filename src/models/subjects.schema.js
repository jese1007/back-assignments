import mongoose, {Schema,ObjectId} from "mongoose";

const subjectSchema = new Schema({
    label: String,
    picture: String,
})

export const subjectsModel = mongoose.model('subject', subjectSchema)