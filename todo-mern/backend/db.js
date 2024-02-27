const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://anishjaiswal:1234567890@cluster0.gyjkjci.mongodb.net/todos");


const todoSchema = mongoose.Schema({
    title: String,
    des: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports= {
    todo
}