const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
  Todo.find({}).then(todos => {
    res.render('index', { todos: todos });
  });
});

router.post('/todos', (req, res) => {
  let newTodo = new Todo({ description: req.body.description });

  newTodo
    .save()
    .then(todo => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
      res.redirect('/');
    });
});

router.post('/todos/:id/completed', (req, res) => {
  let todoId = req.params.id;

  Todo.findById(todoId)
    .exec()
    .then(todo => {
      todo.done = !todo.done;
      return todo.save();
    })
    .then(todo => res.redirect('/'));

});

module.exports = router;