const { MongoClient, ObjectId } = require('mongodb');

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

exports.handler = async (event) => {
  const { id, details } = JSON.parse(event.body);
  

  try {
    const client = await clientPromise;
    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: details }
    );

    if (result.modifiedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'No document found to update' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Document updated successfully' }),
    };
  } catch (error) {
    console.error('Error updating document:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating document', error: error.message }),
    };
  }
};
