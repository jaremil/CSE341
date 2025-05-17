const routes = require('express') .Router();

const myController = require("../controllers")

// original code in Professor Birch's expample. working code in ../controllers/index.js as shown above
// routes.get('/', (req, res, next) => {
//     res.json('Jade Furtado')
// });

/**
 * Parameters
 * hello string
 */

// GET all, GET by id, PUT, Post, and DELETE
routes.get('/', myController.awesomeFunction);
routes.put('/', (req, res, next)=>{console.log('hello')});
routes.post('/', (req, res, next)=>{console.log('hello')});
routes.delete('/', (req, res, next)=>{console.log('hello')});

module.exports = routes;