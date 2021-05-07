const { MongoClient } = require("mongodb");
const uri =
  "mongodb://localhost:27017/mongoDB-tricks";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('mongoDB-tricks');
    const movies = database.collection('test');
    const query = { movie: 'Terminator' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);