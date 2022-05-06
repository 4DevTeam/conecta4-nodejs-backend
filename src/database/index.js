import { MongoClient } from 'mongodb'
const uri = "mongodb+srv://dev:z2IpdJrKWLGb2miJ@conecta4.v4ocs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

export const check = async () => {
    try {
      await client.connect()
      console.log('connected')
    } catch (error) {
        console.log(error)
    }
    finally {
      await client.close();
    }
}

export default client