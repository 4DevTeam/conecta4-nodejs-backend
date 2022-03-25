import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://dev:z2IpdJrKWLGb2miJ@conecta4.v4ocs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

async function run() {
    try {
      await client.connect();
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } catch (error) {
        console.log(error)
    }
    finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

run()