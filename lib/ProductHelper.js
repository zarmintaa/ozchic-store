class CategoryHelper {
  static getProductByCategory(allProducts, category) {
    let products;

    if (category === "") {
      products = allProducts;
    } else if (category === "hijab") {
      products = allProducts.filter((product) => product.category === "hijab");
    } else if (category === "pashmina") {
      products = allProducts.filter(
        (product) => product.category === "pashmina"
      );
    } else if (category === "scarf") {
      products = allProducts.filter((product) => product.category === "scarf");
    } else if (category === "totebag") {
      products = allProducts.filter(
        (product) => product.category === "totebag"
      );
    } else {
      products = [];
    }

    return products;
  }

  static searchProductByTitle(allProducts, title) {
    let products;

    if (title === "") {
      products = allProducts;
    } else {
      products = allProducts.filter((products) =>
        products.name.toLowerCase().includes(title.toLowerCase())
      );
    }

    console.log(products);
    return products;
  }
}

export default CategoryHelper;
