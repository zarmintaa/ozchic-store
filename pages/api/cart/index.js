import { connectToDatabase } from "../../../lib/db";
import Cart from "../../../models/Cart";

export default async function handler(req, res) {
  const { productId, userId, name, price, quantity, image } = req.body;
  console.log({ productId, name, image, price, quantity, userId });
  await connectToDatabase();
  if (req.method === "POST") {
    if (!name || !price || !userId || !productId || !image || !quantity) {
      res.status(422).send({
        message: "Invalid name or price or userId or quantity",
      });
      return;
    }

    const cart = await Cart.create({
      productId,
      name,
      image,
      price,
      quantity,
      userId,
    });

    res.status(201).json({ message: "Cart created", cart });
  }

  if (req.method === "GET") {
    const carts = await Cart.find();
    res.status(200).json({ message: "Success", carts });
  }
}
