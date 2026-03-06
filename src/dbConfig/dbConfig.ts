import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.LOCAL_MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("✅ DB CONNECTED SUCCESSFULLY");
    });

    connection.on("error", (err) => {
      console.log("❌ MONGODB CONNECTION ERROR");
      console.log(err);
      process.exit();
    });

  } catch (error) {
    console.log("❌ DB CONNECTION ERROR");
    console.log(error);
  }
}