import express from "express";
import assignementsService from "../services/assignements.service.js";

const router = express.Router();
const path = '/assignements'

// Create a new assignement
router.post("/", async (req, res) => {

    const {name,dueDate, teacher,subject,mark} = req.body;

    try {

        const assignement = await assignementsService.createassignement(name, dueDate, teacher,subject,mark);
        res.status(201).json(assignement);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve initial assignements
router.get("/initial", async (req, res) => {

    try {

        const assignements = await assignementsService.initialiseAssignement();
        res.status(200).json(assignements);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});

// Retrieve all assignements
router.get("/", async (req, res) => {

    try {

        const assignements = await assignementsService.getassignements(req,res);
        res.status(200).json(assignements);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve an assignement by ID
router.get("/:id", async (req, res) => {

    const {id} = req.params;

    try {


        const assignement = await assignementsService.getassignementById(id);

        if (assignement) {
            res.status(200).json(assignement);
        } else {
            res.status(404).json({error: "assignement not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Update a assignement by ID
router.put("/:id", async (req, res) => {

    const {id} = req.params;
    const updatedData = req.body;

    try {

        const assignement = await assignementsService.updateassignement(id, updatedData);

        if (assignement) {
            res.status(200).json(assignement);
        } else {
            res.status(404).json({error: "assignement not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Delete a assignement by ID
router.delete("/:id", async (req, res) => {

    const {id} = req.params;

    try {

        const result = await assignementsService.deleteassignement(id);
        res.status(200).json({message: result});

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


const assignementRoutes = { path, router };

export default assignementRoutes
