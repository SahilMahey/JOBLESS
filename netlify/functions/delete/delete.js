
const { MongoClient, ObjectId, Collection } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  console.log(id)
  
  try {
    
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    

    if (result.deletedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Post not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Post deleted successfully' }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      
      body: JSON.stringify({ message: 'Error deleting post', error: error.message }),
    };
  }
}