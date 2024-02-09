const Db = process.env.ATLAS_URI;
const { MongoClient } = require('mongodb');

var _db;

module.exports = {
  connectToServer: function () {
    const url = process.env.ATLAS_URI; // Example MongoDB connection URL
    const dbName = 'Rejections';

    return MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(client => {
        _db = client.db(dbName);
        if(_db)
        {
            console.log("Successfully connected to MongoDB.");
            return _db;
        }
        
      })
      .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        throw err;
      });
  },

  getDb: function () {
    
    return _db;
  },
};
