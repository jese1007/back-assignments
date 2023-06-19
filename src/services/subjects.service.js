import {subjectsModel} from "../models/subjects.schema.js";


class subjectsService {

    // Create a new subject
    static async createsubject(dueDate, due, teacher,subject,mark) {

        try {

            const subject = await subjectsModel.create({dueDate, due, teacher,subject,mark});
            return subject;

        } catch (error) {

            throw new Error("Failed to create subject.");

        }

    }

    // Retrieve all subjects
    static async getsubjects() {

        try {

            const subjects = await subjectsModel.find();
            return subjects;

        } catch (error) {

            throw new Error("Failed to retrieve subjects.");

        }
    }

    // Retrieve a subject by ID
    static async getsubjectById(id) {

        try {

            const subject = await subjectsModel.findById(id);
            return subject;

        } catch (error) {

            throw new Error("Failed to retrieve subject.");

        }

    }

    // Update a subject by ID
    static async updatesubject(id, updatedData) {

        try {

            const subject = await subjectsModel.findByIdAndUpdate(id, updatedData, {
                new: true,
            });
            return subject;

        } catch (error) {

            throw new Error("Failed to update subject.");

        }

    }

    // Delete a subject by ID
    static async deletesubject(id) {

        try {

            await subjectsModel.findByIdAndDelete(id);
            return "subject deleted successfully.";

        } catch (error) {

            throw new Error("Failed to delete subject.");

        }

    }
}

export default subjectsService;
