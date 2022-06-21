import {
  getProductFromLocalStorage,
  setProductToLocalStorage,
  updateCountProduct,
} from "../lib/cart-product";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import OrderForm from "../components/cart/OrderForm";
import ListCartOrder from "../components/cart/ListCartOrder";
import Order from "../components/cart/Order";
import Seo from "../components/utils/Seo";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [price, setTotalPrice] = useState(0);
  const [orderToggle, setOrderToggle] = useState(false);
  const [nameOrder, setNameOrder] = useState("");

  // input form
  const nameInput = useRef();
  const addressInput = useRef();
  const phoneInput = useRef();
  const router = useRouter();

  const updateHandler = useCallback(() => {
    const cartProduct = getProductFromLocalStorage();
    let totalItem = 0;
    let totalPrice = 0;
    let nameOrderTitle = "";
    cartProduct.map((product) => {
      totalItem += product.count;
      totalPrice += product.count * +product.price;
      nameOrderTitle += `[${product.name}] `;
    });
    setTotalItems(totalItem);
    setTotalPrice(totalPrice);
    setProducts(cartProduct);
    setNameOrder(nameOrderTitle);
  }, []);

  useEffect(() => {
    updateHandler();
  }, [updateHandler]);

  const updateProduct = (id, action) => {
    if (action === "ADD") {
      updateCountProduct(id, "ADD");
      updateHandler();
    } else {
      updateCountProduct(id, "DELETE");
      updateHandler();
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const name = nameOrder;
    const orderBy = nameInput.current.value;
    const address = addressInput.current.value;
    const phone = phoneInput.current.value;
    const count = totalItems;
    const data = { name, orderBy, price, address, phone, count };

    fetch("http://localhost:8000/api/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "success") {
          setProductToLocalStorage([]);
          updateHandler();
          alert("Success");
        } else {
          alert("Failed");
        }
        router.push("/gallery");
      });
  };

  return (
    <Fragment>
      <Seo
        description={"Sesuaikan produk kamu dari kami untuk kamu beli"}
        url={"https://ozchic-store.vercel.app/cart/"}
        title={"Ozchic Store | Cart"}
      />
      <section className="w-full lg:w-9/12 mx-auto grid lg:grid-cols-[2fr,_1fr] gap-5  my-10">
        <ListCartOrder products={products} updateProduct={updateProduct} />

        <Order
          orderToggle={orderToggle}
          price={price}
          setOrderToggle={setOrderToggle}
          totalItems={totalItems}
        />

        {orderToggle && (
          <OrderForm
            addressInput={addressInput}
            nameInput={nameInput}
            phoneInput={phoneInput}
            submitFormHandler={submitFormHandler}
          />
        )}
      </section>
    </Fragment>
  );
};

export default Cart;
