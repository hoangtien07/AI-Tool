// server/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  console.log("start");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
