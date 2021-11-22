const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  completed: Boolean,
});

module.exports = model('Todo', todoSchema);
