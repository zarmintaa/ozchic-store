class CategoryHelper {
  static fetchProductByCategory(category) {
    const url = `https://ozchic-store-api.herokuapp.com/api/v1/product/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static getProductByCategory(allProducts, category) {
    let products;

    if (category === "") {
      products = allProducts;
    } else if (category === "hijab") {
      // products = allProducts.filter((product) => product.category === "hijab");
      products = this.fetchProductByCategory("hijab");
      console.log(products);
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
