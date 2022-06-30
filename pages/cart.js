import { getProductFromLocalStorage } from "../lib/cart-product";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderForm from "../components/cart/OrderForm";
import ListCartOrder from "../components/cart/ListCartOrder";
import Order from "../components/cart/Order";
import Seo from "../components/utils/Seo";
import Loading from "../components/UI/Loading";
import { getAuthFromLocalStorage } from "../lib/AuthHelper";
import { DeleteCartUser } from "../lib/CartHandler";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [price, setTotalPrice] = useState(0);
  const [orderToggle, setOrderToggle] = useState(false);
  const [nameOrder, setNameOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getCartUser = async () => {
    const response = await fetch(
      "https://ozchic-store-api.herokuapp.com/api/v1/cart",
      {
        headers: {
          Authorization: `Bearer ${getAuthFromLocalStorage()?.data?.token}`,
        },
      }
    );

    const data = await response.json();

    return data.data;
  };

  // input form
  const nameInput = useRef();
  const addressInput = useRef();
  const phoneInput = useRef();
  const router = useRouter();

  const updateHandler = useCallback(async () => {
    const cartProduct = getProductFromLocalStorage();
    let totalItem = 0;
    let totalPrice = 0;
    let nameOrderTitle = "";
    cartProduct.map((product) => {
      totalItem += product.count;
      totalPrice += product.count * +product.price;
      nameOrderTitle += `[${product.name} : ${product.count} pcs] `;
    });
    setTotalItems(totalItem);
    setTotalPrice(totalPrice);
    setProducts(cartProduct);
    setNameOrder(nameOrderTitle);
  }, []);

  const setInitialProducts = useCallback(async () => {
    const allCart = await getCartUser();
    setProducts(allCart);
  }, []);

  const deleteCart = async (id) => {
    const response = await DeleteCartUser(id);

    toast.success(`${response.message}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    const allCart = await getCartUser();
    setProducts(allCart);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (products.length === 0) {
      toast.error("Maaf keranjang kosong!, tidak dapat melakukan pemesanan.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const name = nameOrder
      .replace(/\s/g, "%20")
      .replace(/\[/g, "%5B")
      .replace(/\]/g, "%5D");
    const orderBy = nameInput.current.value;
    const address = addressInput.current.value;
    const phone = phoneInput.current.value;
    const count = totalItems;

    const startText =
      "Saya%20ingin%20order%20pesanan%20di%20ozchic%20store%2C%20dengan%20pesanan%20berikut%20%3A%0A%0A";
    const costomer = `Nama%20:%20${orderBy}`;
    const orders = `Nama%20Barang%20%3A%20${name}`;
    const addressText = `Alamat%20%3A%20${address}`;
    const phoneText = `No.%20HP%20%3A%20${phone}`;
    const countText = `Jumlah%20%3A%20${count}`;
    const totalText = `Total%20%3A%20Rp.${price}`;
    const finalText = `${startText}${costomer}%0A${orders}%0A${addressText}%0A${phoneText}%0A${countText}%0A${totalText}`;

    router.push(
      `https://api.whatsapp.com/send/?phone=+6289669678577&text=${finalText}`
    );
  };

  useEffect(() => {
    const auth = getAuthFromLocalStorage();
    const token = auth?.data?.token;

    if (token === undefined) {
      setLoading(false);
      setIsLoggedIn(true);
    } else {
      setLoading(false);
      updateHandler();
      setInitialProducts();
    }
  }, [updateHandler, setInitialProducts]);

  if (loading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="w-full md:w-7/12 lg:6/12 rounded p-10 grid justify-center mx-auto font-semibold gap-5 shadow my-10">
        <h1 className="text-xl">Anda harus login terlebih dahulu</h1>
        <button
          onClick={() => router.push("/login")}
          type="button"
          className="px-5 py-1.5 bg-teal-500 text-white rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <Fragment>
      <Seo
        description={"Sesuaikan produk kamu dari kami untuk kamu beli"}
        url={"https://ozchic-store.vercel.app/cart"}
        title={"Ozchic Store | Cart"}
      />
      <section className="w-full lg:w-9/12 mx-auto grid lg:grid-cols-[2fr,_1fr] gap-5  my-10">
        <ListCartOrder products={products} deleteProduct={deleteCart} />

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
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default Cart;
