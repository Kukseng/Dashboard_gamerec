export async function GET(req) {
  try {
    // Sample static data, replace with actual database logic
    const users = [
      { id: 1, name: "John Doe", email: "john@example.com", status:"Active", role:"User", image:"Url" },
      { id: 2, name: "John Doe", email: "john@example.com", status:"Active", role:"User", image:"Url" },
      { id: 3, name: "John Doe", email: "john@example.com", status:"Active", role:"User", image:"Url" },

    ];

    return new Response(JSON.stringify(users), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to fetch users", { status: 500 });
  }
}
