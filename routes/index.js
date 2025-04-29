const routes = require('express') .Router();

const myController = require("../controllers")

// original code in Professor Birch's expample. working code in ../controllers/index.js as shown above
// routes.get('/', (req, res, next) => {
//     res.json('Jade Furtado')
// });

routes.get('/', myController.awesomeFunction);

module.exports = routes;