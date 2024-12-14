// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI not configured");
}

const client = new MongoClient(uri);

export const clientPromise = client.connect();
