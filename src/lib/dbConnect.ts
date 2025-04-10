import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/nirbhorDB";

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully.");

    return;
  } catch (error) {
    console.log("Database Connection failed: " + error);
    process.exit(1);
  }
}

export default dbConnect;
