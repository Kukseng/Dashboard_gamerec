import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (!uri) {
    throw new Error("MongoDB URI not configured");
  }
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function GET(request, { params }) {
  let client;
  try {
    const { id } = params;
    client = await connectToDatabase();
    
    const database = client.db("Auth");
    const objectId = new ObjectId(id);
    
    const game = await database.collection("games").findOne({
      _id: objectId
    });
    
    if (!game) {
      return NextResponse.json(
        { message: "Game not found" },
        { status: 404 }
      );
    }

    // Convert ObjectId to string
    game.id = game._id.toString();
    game._id = game._id.toString();

    return NextResponse.json({ message: "Game found", data: game });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { message: error.message },
      { status: error.message.includes("Invalid ObjectId") ? 400 : 500 }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function PUT(request, { params }) {
  let client;
  try {
    const { id } = params;
    const updateData = await request.json();
    client = await connectToDatabase();
    
    const database = client.db("Auth");
    const objectId = new ObjectId(id);
    
    const { _id, ...gameDataWithoutId } = updateData;
    
    const result = await database.collection("games").updateOne(
      { _id: objectId },
      { 
        $set: {
          ...gameDataWithoutId,
          updatedAt: new Date()
        }
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Game not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Game updated successfully"
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { message: error.message },
      { status: error.message.includes("Invalid ObjectId") ? 400 : 500 }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function DELETE(request, { params }) {
  let client;
  try {
    const { id } = params;
    client = await connectToDatabase();
    
    const database = client.db("Auth");
    const objectId = new ObjectId(id);
    
    const result = await database.collection("games").deleteOne({
      _id: objectId
    });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Game not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Game deleted successfully"
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { message: error.message },
      { status: error.message.includes("Invalid ObjectId") ? 400 : 500 }
    );
  } finally {
    if (client) await client.close();
  }
}