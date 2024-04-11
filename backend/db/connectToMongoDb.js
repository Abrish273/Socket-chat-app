import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("connected to mongo db .");
  } catch (error) {
    console.log("Error connecting to mongo db", error.message);
  }
};

export default connectToMongoDb;
