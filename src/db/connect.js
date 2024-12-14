// connect.js

const mongoose = require("mongoose");


const MONGODB_URI =
  "mongodb+srv://phokukseng:BF5uFtnRsemXp510@cluster0.t3ptb.mongodb.net/Auth?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
