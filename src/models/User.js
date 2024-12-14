import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
    title: String,
    status: { type: String, default: "Active" },
    role: String,
  },
  { timestamps: true }
);

// Check if the connection is already established before creating the model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
