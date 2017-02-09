const express = require('express');
const bodyParser = require('body-parser');
const apiTodos = require('./api/todos');

let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true}));

//Api Todos Lits Router
app.use('/api/todos', apiTodos);

//Global routes
app.get('/', (req, res) => {
    res.json({message: 'hello world'});
});

app.get('/*', (req, res) => {
    res.sendStatus(404);
});



app.listen(port, () => {
    console.log('Server start.')
});
