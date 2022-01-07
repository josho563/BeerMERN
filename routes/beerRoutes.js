// Importing in the router function of the express object
const router = require('express').Router();

// Import in the model
const {Beer} = require('../persistence/models/beer.js');

// Read
router.get('/readAll', (req, res) => {
    // need to pass in error first in order to access the actual data
    Beer.find((error, beers) => {
        res.status(202).send(`accessed get all: ${beers}`);
        })
});

router.get('/get/:id', (req, res) => {
    console.log(req.params.id);
    Beer.findById(req.params.id, (error, beer)=> {
        res.status(200).send(`here is the beer you requested: ${beer}`)
    })
    res.status(202).send(`read by id accessed: ${req.params.id} requested`);
});

// Delete
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(200).send(`beer deleted: ID:${req.params.id}`)
});

router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    Beer.findByIdAndDelete(req.params.id, (error) => {
        res.status(200).send(`beer deleted: ID:${req.params.id}`)
    })
    
}); 

module.exports = router; 