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
    const database = client.db("Auth"); // Changed to consistent database name
    const games = await database.collection("games").find({}).toArray();
    await client.close();

    return new Response(JSON.stringify(games), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET Error:", error); // Added detailed error logging
    return new Response(JSON.stringify({ 
      error: "Failed to fetch games",
      details: error.message 
    }), {
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
    console.log("Received game data:", gameData); // Log received data

    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("gamestore");

    let result;
    if (gameData._id) {
      // Update existing game
      const { _id, ...updateData } = gameData;
      
      // Validate ObjectId
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

        // Check update results
        if (result.matchedCount === 0) {
          return new Response(JSON.stringify({ 
            error: "No game found with the provided ID",
            details: { id: _id }
          }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (result.modifiedCount === 0) {
          return new Response(JSON.stringify({ 
            message: "No changes were made to the game",
            details: { id: _id }
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
      } catch (idError) {
        return new Response(JSON.stringify({ 
          error: "Invalid game ID format",
          details: idError.message 
        }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
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
    console.error("POST Error:", error); // Added detailed error logging
    return new Response(JSON.stringify({ 
      error: "Failed to process game",
      details: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  // ... (previous implementation remains the same)
}