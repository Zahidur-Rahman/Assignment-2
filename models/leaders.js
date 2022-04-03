const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var leadersSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type: String,
        rquired: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
})

var Leaders = mongoose.model('Leaders',leadersSchema);
module.exports = Leaders;