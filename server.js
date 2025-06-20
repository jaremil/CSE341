// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./db/connect');
// const port = process.env.PORT || 8080;
// const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', require('./routes'));

// mongodb.initDb((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });

// const configFile = process.env.CONFIG_FILE_NAME;
// console.log(configFile);

require('dotenv').config(); // Move this to the top

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.error('Failed to connect to DB', err);
  } else {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  }
});

const configFile = process.env.CONFIG_FILE_NAME;
console.log('Config File:', configFile);
