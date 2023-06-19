import {usersModel} from "../models/users.schema.js";


class UsersService {

    // Create a new user
    static async createUser(name, firstName, age) {

        try {

            const user = await usersModel.create({name, firstName, age});
            return user;

        } catch (error) {

            throw new Error("Failed to create user.");

        }

    }

    // Retrieve all users
    static async getUsers() {

        try {

            const users = await usersModel.find();
            return users;

        } catch (error) {

            throw new Error("Failed to retrieve users.");

        }
    }

    // Retrieve a user by ID
    static async getUserById(id) {

        try {

            const user = await usersModel.findById(id);
            return user;

        } catch (error) {

            throw new Error("Failed to retrieve user.");

        }

    }

    // Update a user by ID
    static async updateUser(id, updatedData) {

        try {

            const user = await usersModel.findByIdAndUpdate(id, updatedData, {
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

            await usersModel.findByIdAndDelete(id);
            return "User deleted successfully.";

        } catch (error) {

            throw new Error("Failed to delete user.");

        }

    }
}

export default UsersService;
