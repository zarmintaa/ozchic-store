import products from "../data/products";

class Product {
  static findAll() {
    return products;
  }

  static findById(id) {
    const index = products.find((product) => product.id === id);
    if (index) {
      return index;
    } else {
      return `Product with id ${id} not found`;
    }
  }

  static findOne(title) {
    const filterProduct = products.filter((products) =>
      products.name
        .toLowerCase()
        .replace(" ", "")
        .includes(title.toLowerCase().replace(" ", ""))
    );
    if (filterProduct) {
      return filterProduct;
    } else {
      `Product with title ${title} not found`;
    }
  }

  static findByCategory(category) {
    const allProducts = products.filter(
      (product) => product.category === category
    );
    if (allProducts && allProducts.length > 0) {
      return allProducts;
    } else {
      return `Product with category '${category}' not found`;
    }
  }
}

export default Product;
