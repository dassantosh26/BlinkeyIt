/** @format */

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Please Provide MONGODB_URI in the .env file");
}
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected Sucessfully");
  } catch (error) {
    console.log("MongoDB coonection Error", error);
    process.exit(1);
  }
}
export default connectDB;