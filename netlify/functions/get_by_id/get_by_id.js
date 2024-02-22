const { MongoClient, ObjectId } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  console.log(id);

  try {
    const client = await clientPromise;
    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const result = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!result) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Details not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Details retrieved successfully', details: result }),
    };
  } catch (error) {
    console.error('Error retrieving details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving details', error: error.message }),
    };
  }
};
