//import packages
const express = require('express');
const cors = require('cors');

//imported routes
const lizardRoutes = require('./routes/beerRoutes.js');

//importing mongoose 
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect('mongodb+srv://root:root@mycluster.7c6k3.mongodb.net/test' , {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log("Cant connect to DB ");
    } else if (!error) {
        console.log("Connected to DB");
    }
});

//use routes
app.use('/beer', beerRoutes);

//listen to port 5015
const server = app.listen(5015, () => {
    console.log(`Server started!`);
});
