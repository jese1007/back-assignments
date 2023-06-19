import express from "express";
import UsersService from "../services/users.service.js";

const router = express.Router();
const path = '/users'

// Create a new user
router.post("/", async (req, res) => {

    const {name, firstName, age} = req.body;

    try {

        const user = await UsersService.createUser(name, firstName, age);
        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve all users
router.get("/", async (req, res) => {

    try {

        const users = await UsersService.getUsers();
        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve a user by ID
router.get("/:id", async (req, res) => {

    const {id} = req.params;

    try {


        const user = await UsersService.getUserById(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: "User not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Update a user by ID
router.put("/:id", async (req, res) => {

    const {id} = req.params;
    const updatedData = req.body;

    try {

        const user = await UsersService.updateUser(id, updatedData);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: "User not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Delete a user by ID
router.delete("/:id", async (req, res) => {

    const {id} = req.params;

    try {

        const result = await UsersService.deleteUser(id);
        res.status(200).json({message: result});

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


const UserRoutes = { path, router };

export default UserRoutes
