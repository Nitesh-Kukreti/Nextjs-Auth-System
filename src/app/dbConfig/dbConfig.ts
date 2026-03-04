import mongoose, { Connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
        console.log("✅✅ DB CONNECTED SUCCESSFULLY ✅✅")
    })

    connection.on("error", (err) => {
        console.log("❌❌ MONGODB CONNNECTION ERROR PLEASE MAKE SURE MONGODB IS RUNNING  ❌❌");
        console.log(err);
        process.exit();
    })

  } catch (error) {
    console.log("❌❌ DB CONNECTION ERROR ❌❌");
    console.log(error);
  }
}
