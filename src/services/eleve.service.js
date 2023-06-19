import {EleveModel} from "../models/eleve.schema.js";


class EleveService {

    // Create a new user
    static async createEleve(name, firstName, age, photo) {

        try {

            const user = await EleveModel.create({name, firstName, age, photo});
            return user;

        } catch (error) {

            throw new Error("Failed to create user.");

        }

    }

    // Retrieve all Eleve
    static async getEleve() {

        try {

            const Eleve = await EleveModel.find();
            return Eleve;

        } catch (error) {

            throw new Error("Failed to retrieve Eleve.");

        }
    }

    // Retrieve a user by ID
    static async getUserById(id) {

        try {

            const user = await EleveModel.findById(id);
            return user;

        } catch (error) {

            throw new Error("Failed to retrieve user.");

        }

    }

    // Update a user by ID
    static async updateUser(id, updatedData) {

        try {

            const user = await EleveModel.findByIdAndUpdate(id, updatedData, {
                new: true,
            });
            return user;

        } catch (error) {

            throw new Error("Failed to update user.");

        }

    }

    // Delete a user by ID
    static async deleteUser(id) {

        try {

            await EleveModel.findByIdAndDelete(id);
            return "User deleted successfully.";

        } catch (error) {

            throw new Error("Failed to delete user.");

        }

    }
}

export default EleveService;
