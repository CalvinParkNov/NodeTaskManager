const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name cannot be more than 20 characters']
    },
    complete: {
        type: Boolean,
        default:false
    },
})



//model is 'Task' and second one is schema.
module.exports = mongoose.model('Task', TaskSchema)