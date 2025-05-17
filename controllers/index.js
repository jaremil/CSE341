// const awesomeFunction = async (req, res, next) => {
async function awesomeFunction(req, res, next) {
    // #swagger.description = 'Some description...'
    res.json('Nicholas Furtado')

    const { MongoClient } = require('mongodb');
    const url = "mongodb+srv://mil19017:uZwOG5XwS6wEWavH@cluster0.1hf0jus.mongodb.net/";
    const client = new MongoClient(url);
    const dbName = 'sample_mflix';
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('contacts');
    console.log(collection.dbName)
};

module.exports = {awesomeFunction};