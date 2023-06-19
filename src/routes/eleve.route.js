import express from "express";
import EleveService from "../services/eleve.service.js";

const router = express.Router();
const path = '/Eleve'

// Create a new eleve
router.post("/", async (req, res) => {

    const {name, firstName, age, photo} = req.body;

    try {

        const eleve = await EleveService.createEleve(name, firstName, age, photo);
        res.status(201).json(eleve);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve all Eleve
router.get("/", async (req, res) => {

    try {

        const Eleve = await EleveService.getEleve();
        res.status(200).json(Eleve);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve a user by ID
router.get("/:id", async (req, res) => {

    const {id} = req.params;

    try {


        const user = await EleveService.getEleveById(id);

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

        const user = await EleveService.updateEleve(id, updatedData);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: "User not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Delete a eleve by ID
router.delete("/:id", async (req, res) => {

    const {id} = req.params;

    try {

        const result = await EleveService.deleteELeve(id);
        res.status(200).json({message: result});

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


const eleveRoutes = { path, router };

export default eleveRoutes
