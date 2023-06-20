import mongoose, {Schema} from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const assignementSchema = new Schema({
    name: String,
    dueDate: String,
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Students' // Refers to the 'Students' model
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject' // Refers to the 'Subject' model
    },
    mark: Number,
    due: Boolean
})
assignementSchema.plugin(aggregatePaginate);

export const assignementsModel = mongoose.model('Assignement', assignementSchema)