import mongoose, { mongo } from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error, please check MongoDB running",
        +error
      );
      process.exit();
    });
  } catch (error) {
    console.log(error, "connection with mongodb failed");
  }
}
