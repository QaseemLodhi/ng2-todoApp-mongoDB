import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todoTask: { type: 'String', required: true },
  completed: { type: 'Boolean', required: true },
  date: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Todo', todoSchema);
