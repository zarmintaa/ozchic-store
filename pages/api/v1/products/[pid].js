import Product from "../../../../models/Product";

export default function handler(req, res) {
  const pid = req.query.pid;
  const singleProduct = Product.findById(+pid);
  res.status(200).json({ message: "Success get data", product: singleProduct });
}
