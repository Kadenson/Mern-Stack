// IMPORT THE MODEL FROM YOUR MODEL.JS
const {Author} = require("../models/author.model")


// CREATE
module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

// READ
module.exports.allAuthors = (req, res) =>{
    Author.find()
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err))
}

module.exports.oneAuthor = (req, res) =>{
    Author.findOne({ _id: req.params.author_id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json({err}))
}


// UPDATE
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({ _id: req.params.author_id}, req.body, { new : true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// DELETE

module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({ _id: req.params.author_id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({err}))
}