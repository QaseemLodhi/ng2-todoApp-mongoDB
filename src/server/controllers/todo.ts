import Todo from '../models/todo';

export function getTodos(req, res) {
  Todo.find().sort('-date').exec((err, Todos) => {
    if (err) {
      console.log('getTodos', err);
      return res.json({ success:false, data:null, error:err });
    }
    res.json({ success:true, data:Todos, error:null });
  });
}

export function addTodo(req, res) {
  if (!req.body.todo.todoTask) {
    return res.json({ success:false, data:null, error:'Missing todo task!' });
  }

  const newTodo = new Todo(req.body.todo);
  newTodo.save((err, saved) => {
    if (err) {
      console.log('addTodo', err);
      return res.json({ success:false, data:null, error:err });
    }
    Todo.findOne({ _id: saved._id }).exec((err, todo) => {
      if (err) {
        console.log('addTodo2', err);
        return res.json({ success:false, data:null, error:err });
      }
      res.json({ success:true, data:todo, error:null });
    });
  });
}

export function getTodo(req, res) {
  Todo.findOne({ _id: req.params._id }).exec((err, todo) => {
    if (err) {
      console.log('getTodo', err);
      return res.json({ success:false, data:null, error:err });
    }
    res.json({ success:true, data:todo, error:null });
  });
}

export function deleteTodo(req, res) {
  Todo.findOne({ _id: req.params.id }).exec((err, todo) => {
    if (err) {
      console.log('deleteTodo', err);
      return res.json({ success:false, data:null, error:err });
    }

    todo.remove(() => {
      res.json({ success:true, data:null, error:null });;
    });
  });
}
