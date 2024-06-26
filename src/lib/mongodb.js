
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = 'gta-cheat-db'; // replace with your MongoDB database name

if (!MONGODB_URI) {
  throw new Error('MongoDB URI not Found!');
}

if (!MONGODB_DB) {
  throw new Error('Database name not found!');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  });

  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
