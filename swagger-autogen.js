
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: 'localhost:3000'
  };
  
const outputFile = './swagger-output.json';
const routes = [
    './routes/index.js',
    // './more/routes',
]

swaggerAutogen(outputFile, routes, doc);