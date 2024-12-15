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
    const games = await database.collection("games").find({}).toArray();
    await client.close();

    return new Response(JSON.stringify(games), {
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
    const gameData = await request.json();
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("gamestore");

    let result;
    if (gameData._id) {
      // Update existing game
      const { _id, ...updateData } = gameData;
      result = await database
        .collection("games")
        .updateOne({ _id: new ObjectId(gameData._id) }, { $set: updateData });
    } else {
      // Add new game
      gameData.createdAt = new Date();
      gameData.updatedAt = new Date();
      result = await database.collection("games").insertOne(gameData);
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
    const gameId = searchParams.get("id");

    if (!gameId) {
      return new Response(JSON.stringify({ error: "Game ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("gamestore");

    const result = await database.collection("games").deleteOne({
      _id: new ObjectId(gameId),
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