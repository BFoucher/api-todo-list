const express = require('express');
const bodyParser = require('body-parser');
const apiTodos = require('./src/api/todos');
const cors = require('cors');

let app = express();
let port = 3001;

app.use(cors());
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
