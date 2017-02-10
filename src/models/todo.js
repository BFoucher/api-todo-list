const Sequelize = require('sequelize');
const db = require('../db/database');

let Todo = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    file: {
        type: Sequelize.STRING
    }
});

module.exports = Todo;