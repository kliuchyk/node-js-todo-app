const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
  res.render('index', {});
});

router.post('/todos', (req, res) => {
  res.json(req.body);
});

module.exports = router;