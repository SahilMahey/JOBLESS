import express, { json, urlencoded } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.URI, { useUnifiedTopology: true });
const app = express();
app.use(cors());
var db;


app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

async function connectToDB() {
    try {
        // Connect the client to the server
        await client.connect();
        // Our db name is going to be users-db
        db = client.db('Rejections');
        console.log("Connected successfully to mongoDB");  
    } catch (err) {
        throw err; 
    } 
}
/**
 * This method just returns the database instance
 * @returns A Database instance
 */
async function getDb() {
    return db;
}



async function createServer(){
    try {
      // we will only start our server if our database
      // starts correctly. Therefore, let's wait for
      // mongo to connect
      await connectToDB();
      
      
      
     
      
      
    
      // start the server
      app.listen(process.env.PORT || 5000, () => {
        console.log('Example app listening at http://localhost:%d', process.env.PORT || 5000);
      });
    }catch(err){
      console.err(err)
    }

    app.get('/api/data',async(req, res)=>
      {
        let collection = await db.collection('Rejection');
        let obj = await collection.find({}).toArray();
        return res.json(obj);

      })
  }
  createServer();

