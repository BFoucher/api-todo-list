const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 3000;

app.listen(port, () => {
    console.log('Server start.')
});

app.get('/', (req, res) => {
    res.send({message: 'hello world'});
});
