const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  todoId: Number,
  id: Number,
  title: String,
  completed: Boolean
});

module.exports = model('Todo', todoSchema);
