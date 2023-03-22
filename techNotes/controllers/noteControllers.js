const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')


// @desc GET all notes
// @route GET /notes
// @access Public

const getAllNotes = asyncHandler(async (req, res) => {
    
})
// @desc create new note
// @route POST /notes
// @access Public

const createNote = asyncHandler(async (req, res) => {

})
// @desc update a note
// @route PATCH /notes
// @access Public

const updateNote = asyncHandler(async (req, res) => {

})
// @desc delete a note
// @route DELETE /notes
// @access Public

const deleteNote = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}