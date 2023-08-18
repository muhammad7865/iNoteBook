const express = require('express')
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser')
const Notes = require('../models/Notes')
const { body, validationResult } = require("express-validator")

// Router 1: By using "/api/notes/fetchallnotes" we are going to fetch the notes user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)

        //it will create an error if anything occurs
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

// Router 2: By using "/api/notes/addnotes" we are going to add the notes for user
router.post('/addnotes', fetchuser, [

    // it will validate if the validation rules are up to the mark
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description atleast have length 5').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body

        //If there is an error it creates a 400 bad request 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //It will create new notes for the user and save them in the database
        const notes = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednotes = await notes.save()
        res.json(savednotes)

        //it will create an error if anything occurs
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// Router 3: By using Put:"/api/notes/update" we are going to update the notes for user

router.put('/update/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body

        //Create a new note
        const newnote = {}
        if (title) { newnote.title = title }
        if (description) { newnote.description = description }
        if (tag) { newnote.tag = tag }

       //Find the note to be updated and update it

        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not found")
        }
        // Check if the authorized person is here

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
        res.json({note})


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

// Router 4: By using delete: "/api/notes/delete" we are going to delete the notes for user

router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body

       //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not found")
        }
        // Check if the authorized person is here
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note=await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note has been Successfully deleted",NoteInfo:note})


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})

module.exports = router