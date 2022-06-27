import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import User from "../../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).send({
        message: "Invalid email or invalid password or password too sort",
      });
      return;
    }

    const hashedPassword = await hashPassword(password);

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (user) {
      res.status(422).json({
        message: "User already exists",
      });
      return;
    }

    const result = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created", result });
  }
}
