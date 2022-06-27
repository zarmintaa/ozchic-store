import mongoose from "mongoose";

const dbUrl =
  "mongodb+srv://user1:user1@cluster0.wb1uu.mongodb.net/auth-demo?retryWrites=true&w=majority";

export async function connectToDatabase() {
  return await mongoose.connect(dbUrl);
}
