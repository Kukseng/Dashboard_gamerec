import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  let client;
  try {
    if (!uri) {
      return new Response(
        JSON.stringify({ error: "MongoDB URI not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Auth");
    const games = await database.collection("games").find({}).toArray();
    
    // Convert _id to string format
    const formattedGames = games.map(game => ({
      ...game,
      id: game._id.toString(), // Add string ID
      _id: game._id.toString() // Convert ObjectId to string
    }));

    return new Response(JSON.stringify(formattedGames), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch games",
        details: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function POST(request) {
  let client;
  try {
    if (!uri) {
      return new Response(
        JSON.stringify({ error: "MongoDB URI not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const gameData = await request.json();
    client = new MongoClient(uri);
    await client.connect();
    const database = client.db("Auth");

    let result;
    if (gameData._id) {
      const { _id, ...updateData } = gameData;
      try {
        const objectId = new ObjectId(_id);
        result = await database
          .collection("games")
          .updateOne(
            { _id: objectId },
            {
              $set: {
                ...updateData,
                updatedAt: new Date()
              }
            }
          );
      } catch (idError) {
        return new Response(
          JSON.stringify({
            error: "Invalid game ID format",
            details: idError.message
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      gameData.createdAt = new Date();
      gameData.updatedAt = new Date();
      result = await database.collection("games").insertOne(gameData);
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process game",
        details: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    if (client) await client.close();
  }
}