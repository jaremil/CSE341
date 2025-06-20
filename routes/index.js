// const routes = require('express') .Router();
// const express = require('express');
// const router = express.Router();

// const myController = require("../controllers")

// // original code in Professor Birch's expample. working code in ../controllers/index.js as shown above
// // routes.get('/', (req, res, next) => {
// //     res.json('Jade Furtado')
// // });

// /**
//  * Parameters
//  * hello string
//  */

// // GET all, GET by id, PUT, Post, and DELETE
// routes.get('/contacts', myController.awesomeFunction);
// routes.put('/contacts', (req, res, next)=>{console.log('hello')});
// routes.post('/contacts', (req, res, next)=>{console.log('hello')});
// routes.delete('/contacts', (req, res, next)=>{console.log('hello')});
// router.use('/contacts', require('./contacts'));

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

module.exports = router;