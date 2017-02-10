const express = require('express');
const Todo = require('../models/todo');

let router = express.Router();

router.get('/', (req, res) => {
    Todo
        .findAll()
        .then(function(todos) {
            res.json(todos)
        })
        .catch(function (err) {
            res.json({error: 'SQLITE:' + err});
        });
});

router.post('/', (req, res) => {
    Todo
        .create({
        label: req.body.label,
        status: 0,
    })
        .then(function(todos) {
        res.json({success: true});
    })
        .catch(function (err) {
            res.json({error: 'SQLITE:' + err});
        });
});

router.get('/:id(\\d+)', (req, res) => {
    Todo
        .findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(todos) {
            res.json(todos != null ? todos : [])
        })
        .catch(function (err) {
            res.json({error: 'SQLITE:' + err});
        });
});

router.delete('/:id(\\d+)', (req, res) => {
    Todo
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(todos) {
            res.json({success: true});
        })
        .catch(function (err) {
            res.json({error: 'SQLITE:' + err});
        });
});

router.put('/:id(\\d+)', (req, res) => {
    console.log(req.body);
    Todo
        .update({
            label: req.body.label,
            description: req.body.description,
            status: req.body.status,
            file: req.body.file,
            updatedAt: null,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(todos) {
            res.json({success: true});
        })
        .catch(function (err) {
            res.json({error: 'SQLITE:' + err});
        });
});




module.exports = router;