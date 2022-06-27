import { connectToDatabase } from "../../../lib/db";
import Cart from "../../../models/Cart";

export default async function handler(req, res) {
  const { method, query } = req;
  await connectToDatabase();

  if (method === "GET") {
    const carts = await Cart.find({ userId: query.id });
    res.status(200).json({ carts });
  }

  if (method === "DELETE") {
    const cart = await Cart.deleteOne({ _id: query.id });
    res.status(200).json({ cart });
  }
}
