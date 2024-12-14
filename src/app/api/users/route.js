// src/app/api/users/route.js
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  if (!uri) {
    return new Response(
      JSON.stringify({ error: "MongoDB URI not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Auth");
    const users = await database.collection("users").find({}).toArray();
    await client.close();

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  if (!uri) {
    return new Response(
      JSON.stringify({ error: "MongoDB URI not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const userData = await request.json();
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Auth");

    let result;
    if (userData._id) {
      // Update existing user
      const { _id, ...updateData } = userData;
      result = await database
        .collection("users")
        .updateOne({ _id: new ObjectId(userData._id) }, { $set: updateData });
    } else {
      // Add new user
      result = await database.collection("users").insertOne(userData);
    }

    await client.close();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  if (!uri) {
    return new Response(
      JSON.stringify({ error: "MongoDB URI not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Auth");

    const result = await database.collection("users").deleteOne({
      _id: new ObjectId(userId),
    });

    await client.close();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
