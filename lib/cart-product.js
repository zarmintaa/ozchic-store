export const getProductFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const getLocalProduct = localStorage.getItem("favProduct");
    if (getLocalProduct) {
      return JSON.parse(getLocalProduct);
    } else {
      localStorage.setItem("favProduct", JSON.stringify([]));
    }
  }
};

export const isFavProductExist = (id) => {
  return getProductFromLocalStorage().findIndex((data) => data.id === id);
};

export const setProductToLocalStorage = (products) =>
  localStorage.setItem("favProduct", JSON.stringify(products));

export const setFavProduct = (product) => {
  const prevFavProduct = getProductFromLocalStorage();
  const isAddedProduct = isFavProductExist(product.id);
  const countProduct = { count: 1 };
  const finalProduct = { ...product, ...countProduct };
  if (isAddedProduct) {
    const data = [...prevFavProduct, finalProduct];
    setProductToLocalStorage(data);
  } else {
    setProductToLocalStorage([finalProduct]);
  }
};

export const unsetFavProduct = (id) => {
  const currentProduct = getProductFromLocalStorage();
  if (currentProduct) {
    const latestProduct = currentProduct.filter((product) => product.id !== id);
    return setProductToLocalStorage(latestProduct);
  }
};

export const countFavProduct = () => {
  return getProductFromLocalStorage();
};

export const updateCountProduct = (id, action) => {
  const indexProduct = isFavProductExist(id);
  const currentFav = getProductFromLocalStorage();

  if (action === "ADD") {
    currentFav[indexProduct].count += 1;
    setProductToLocalStorage(currentFav);
  }

  if (action === "DELETE") {
    if (currentFav[indexProduct].count === 1) {
      unsetFavProduct(id);
      console.log("Remove item");
    } else {
      currentFav[indexProduct].count -= 1;
      setProductToLocalStorage(currentFav);
      console.log("-1 count item");
    }
  }
};
