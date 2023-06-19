import {assignementsModel} from "../models/assignements.schema.js";
import data from "../data/assignments.js";


class assignementsService {

    static async initialiseAssignement(){
        var dataInsert = [];
        try {
            for (let index = 0; index < data.length; index++) {
                dataInsert.push(new assignementsModel(data[index]));
            }
            const result = await assignementsModel.insertMany(dataInsert,{ordered: true});
        } catch (error) {

            throw new Error(error);

        }
    }

    // Create a new assignement
    static async createassignement(name,dueDate, teacher,subject,mark,due) {

        try {

            const assignement = await assignementsModel.create({name,dueDate, teacher,subject,mark,due});
            return assignement;

        } catch (error) {

            throw new Error("Failed to create assignement.");

        }

    }

    // Retrieve all assignements
    static async getassignements(req, res) {
        try {
            var aggregateQuery = assignementsModel.aggregate([{ $match: { due: (/true/).test(req.query.match) } }]) ;
            
            const assignements = assignementsModel.aggregatePaginate(aggregateQuery,
                {
                  page: parseInt(req.query.page) || 1,
                  limit: parseInt(req.query.limit) || 10,
                }
            );
            return assignements;

        } catch (error) {

            throw new Error(error);

        }
    }

    // Retrieve a assignement by ID
    static async getassignementById(id) {

        try {

            const assignement = await assignementsModel.findById(id);
            return assignement;

        } catch (error) {

            throw new Error("Failed to retrieve assignement.");

        }

    }

    // Update a assignement by ID
    static async updateassignement(id, updatedData) {

        try {

            const assignement = await assignementsModel.findByIdAndUpdate(id, updatedData, {
                new: true,
            });
            return assignement;

        } catch (error) {

            throw new Error("Failed to update assignement.");

        }

    }

    // Delete a assignement by ID
    static async deleteassignement(id) {

        try {

            await assignementsModel.findByIdAndDelete(id);
            return "assignement deleted successfully.";

        } catch (error) {

            throw new Error("Failed to delete assignement.");

        }

    }
}

export default assignementsService;
