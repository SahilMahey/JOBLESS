const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  const { name,company,date } = JSON.parse(event.body);
 

    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        
        const result = await collection.insertOne({name,company,date});

       

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Post created successfully', postId: result.insertedId }),

        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }

