import Product from "../../../../../models/Product";

export default function handler(req, res) {
  const { category } = req.query;
  if (!category) {
    res
      .status(402)
      .json({ message: "Category tidak boleh kosong", products: null });
  }

  const productByCategory = Product.findByCategory(category);
  if (productByCategory.length < 1) {
    res.status(200).json({ message: "Data tidak ditemukan", products: null });
  }

  res
    .status(200)
    .json({ message: "Success get data", products: productByCategory });
}
