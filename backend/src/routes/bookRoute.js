/*jshint esversion: 6*/
const express = require("express");
const authController = express.Router();

// Our user model
const Book = require("../model/book");
const upload = require('../config/multer');
const bookRoute = express.Router();
// Book Routes
bookRoute.post('/', (req, res) =>{
 
  const {title, description, price, image} = req.body;
  
  
  Book.create({title, description, price, image})
  .then(resp => res.json(resp))
  .catch(err => res.json(err))
  });
  

bookRoute.get("/", (req, res) => {
  Book.find()
  .then(resp => res.json(resp))
  .catch(err => res.json(err))
});

bookRoute.get("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const {id}= req.params;
  Book.findById(id)
  .then( book =>res.status(200).json(book))
  .catch(err => res.json(err));
});



/* DELETE a Phone. */

bookRoute.delete('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const {id}=req.params;
  Book.findByIdAndRemove(id)
  .then(res => res.json({message: `Project with ${req.params.id} is removed successfully. `}))
  .catch(err => res.json(err))
  });



module.exports = bookRoute;
