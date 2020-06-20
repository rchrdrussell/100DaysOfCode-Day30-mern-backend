const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	todo_description: String,
	todo_responsible: String,
	todo_priority: String,
	todo_completed: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
