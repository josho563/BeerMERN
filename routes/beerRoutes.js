// Importing in the router function of the express object
const router = require('express').Router();

// Import in the model
const {Beer} = require('../persistence/beer.js');

// Create
router.post('/create', (req, res) => {
    console.log(req.body);
    const beer = new Beer(req.body);
    beer.save().then((result) => {
        res.status(201).send(`${result.name} beer created sucessfully`);
    })
});

// Update
router.put('/update/:id', (req, res) => {

    res.status(202).send(`beer ${req.params.id} updated sucessfully`);
});

// Read All
router.get('/readAll', (req, res) => {
    Beer.find((error, beers) => {
         res.status(202).send(`accessed get all: ${beers}`);
 })
});

// Read By ID
router.get('/get/:id', (req, res) => {
    console.log(req.params.id);
        Beer.findById(req.params.id, (error, beer)=> {
            res.status(200).send(`here is the beer you requested: ${beer}`);
     }) 
    res.status(202).send(`read by id accessed: ${req.params.id} requested`);
});

// Delete
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(200).send(`beer deleted: ID:${req.params.id}`)
});

// Delete by ID
router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id); 
    Beer.findByIdAndDelete(req.params.id, (error) => {
        res.status(200).send(`beer deleted: ID:${req.params.id}`)
    })
}); 

module.exports = router;

