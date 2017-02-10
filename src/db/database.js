const Sequelize = require('sequelize');

let database = new Sequelize('todos', '','',{
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: './var/todos.db'
});

module.exports = database;