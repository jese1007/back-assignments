import mongoose, {Schema} from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const assignementSchema = new Schema({
    name: String,
    dueDate: String,
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Refers to the 'User' model
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject' // Refers to the 'Subject' model
    },
    mark: Number
})
assignementSchema.plugin(aggregatePaginate);

export const assignementsModel = mongoose.model('Assignement', assignementSchema)