const express = require('express');

let router = express.Router();



router.get('/', (req, res) => {
    res.json({message: 'List of todos'});
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.json({message: 'add new todo'});
});

router.get('/:id(\\d+)', (req, res) => {
    res.json({message: 'Show todo item n°'+req.params.id});
});

router.delete('/:id(\\d+)', (req, res) => {
    res.json({message: 'Delete todo item n°'+req.params.id});
});

router.put('/:id(\\d+)', (req, res) => {
    res.json({message: 'Update todo item n°'+req.params.id});
});




module.exports = router;