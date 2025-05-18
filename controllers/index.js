// const awesomeFunction = async (req, res, next) => {
async function awesomeFunction(req, res, next) {
  // #swagger.description = 'Get all'
  // res.json('Nicholas Furtado')

//   req.id

  const { MongoClient } = require("mongodb");
  const url =
    "mongodb+srv://mil19017:uZwOG5XwS6wEWavH@cluster0.1hf0jus.mongodb.net/";
  const client = new MongoClient(url);
  const dbName = "sample_mflix";
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("contacts");

  const data = collection.find();
  var final = [];
  for await (const d of data) {
    // if (req.id) {
    //     if (req.id === d._id) {
    //         final.push(d)
    //     }
    // } else {
        final.push(d);
    // }
  }
  res.json(final);
}

module.exports = { awesomeFunction };
