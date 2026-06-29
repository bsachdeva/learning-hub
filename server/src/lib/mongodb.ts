import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/learning-hub";

export async function connect() {
  if (mongoose.connection.readyState === 1) return mongoose;
  await mongoose.connect(uri);
  return mongoose;
}
