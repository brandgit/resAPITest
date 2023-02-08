import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({ path: "./configs/.env" });

async function connected() {
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(process.env.DB_URL_CAS1);
  console.log("Database Connected");
  return db;
}

export default connected;
