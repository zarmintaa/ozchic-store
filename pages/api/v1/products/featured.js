import featuredImage from "../../../../data/featured-image";
import cors from "../../../../lib/cors";

export default async function handler(req, res) {
  await cors(req, res);
  res
    .status(200)
    .json({ message: "Success get data", products: featuredImage });
}
