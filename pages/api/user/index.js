import { connectToDatabase } from "../../../lib/db";
import User from "../../../models/User";

export default async function handler(req, res) {
  // get all users using mongoose
  await connectToDatabase();

  const users = await User.find({});

  res.status(200).json({ users });
}
