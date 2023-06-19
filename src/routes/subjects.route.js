import express from "express";
import subjectsService from "../services/subjects.service.js";

const router = express.Router();
const path = '/subjects'

// Create a new subject
router.post("/", async (req, res) => {

    const {label,picture} = req.body;

    try {

        const subject = await subjectsService.createsubject(label,picture);
        res.status(201).json(subject);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve all subjects
router.get("/", async (req, res) => {

    try {

        const subjects = await subjectsService.getsubjects();
        res.status(200).json(subjects);

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Retrieve an subject by ID
router.get("/:id", async (req, res) => {

    const {id} = req.params;

    try {


        const subject = await subjectsService.getsubjectById(id);

        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({error: "subject not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Update a subject by ID
router.put("/:id", async (req, res) => {

    const {id} = req.params;
    const updatedData = req.body;

    try {

        const subject = await subjectsService.updatesubject(id, updatedData);

        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({error: "subject not found."});
        }

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


// Delete a subject by ID
router.delete("/:id", async (req, res) => {

    const {id} = req.params;

    try {

        const result = await subjectsService.deletesubject(id);
        res.status(200).json({message: result});

    } catch (error) {

        res.status(500).json({error: error.message});

    }

});


const subjectRoutes = { path, router };

export default subjectRoutes
