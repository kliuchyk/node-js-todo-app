const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mongoose_express_todos', {
    useNewUrlParser: true
  })
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Error happend', error));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);
// set any file with mustache extension to be considered as template
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', routes)

app.listen(3000, () => {
  console.log('Worked fine');
})