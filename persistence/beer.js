const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const beerSchema = new Schema({
    beerName: {
        type: String,
        required: true
    },
    beerDescription: {
        type: String,
        required: true
    },
    beerImageURL: {
        type: String,
        required: true
    },
    beerAbv: {
        type: Number,
        required: true
    },
    beerAlcoholFree: {
        type: Boolean,
        required: true
    },
    beerType: {
        type: String,
        required: true
    },
})
   
 const Beer = model('Beer', beerSchema);
 module.exports = {'Beer': Beer};
